import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function middleware(request: NextRequest) {
  // 管理者ページへのアクセスのみチェック
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // セッションクッキーからトークンを取得
    const token = request.cookies.get("sb-auth-token")?.value;

    if (!token) {
      // トークンがない場合はログインページにリダイレクト
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      // Supabaseクライアントを作成
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
      const supabase = createClient(supabaseUrl, supabaseAnonKey);

      // トークンを使用してセッションを取得
      const { data, error } = await supabase.auth.getUser(token);

      if (error || !data.user) {
        // エラーまたはユーザーが存在しない場合はログインページにリダイレクト
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }

      // ここでさらに管理者権限のチェックを行うことも可能
      // 例: データベースで admin テーブルをチェックするなど

      // 認証OKの場合は次へ進む
      return NextResponse.next();
    } catch (error) {
      // エラーが発生した場合はログインページにリダイレクト
      console.error("管理者認証エラー:", error);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // 管理者ページ以外はそのまま通す
  return NextResponse.next();
}

// ミドルウェアを適用するパスを指定
export const config = {
  matcher: ["/admin/:path*"],
};
