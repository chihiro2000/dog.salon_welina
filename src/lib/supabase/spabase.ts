import { createClient } from "@supabase/supabase-js";

// 環境変数からSupabaseの接続情報を取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Supabaseクライアントの作成（環境変数がない場合はnull）
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// 環境変数チェック関数
export function isSupabaseAvailable() {
  // ビルド時（サーバーサイドでWindow未定義）かつ環境変数がない場合はfalseを返す
  if (typeof window === "undefined" && (!supabaseUrl || !supabaseAnonKey)) {
    console.warn(
      "ビルド時にSupabase環境変数が見つかりません。モックデータを使用します。"
    );
    return false;
  }

  // クライアントサイドで環境変数がない場合は警告
  if (typeof window !== "undefined" && (!supabaseUrl || !supabaseAnonKey)) {
    console.warn(
      "Supabaseの環境変数が設定されていません。一部機能が動作しない可能性があります。"
    );
  }

  return true;
}

// ニュース関連の型定義
export type News = {
  id: string;
  title: string;
  content: string;
  date: string;
  isImportant: boolean;
  created_at: string;
};

// ギャラリー関連の型定義
export type GalleryImage = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
};
