import { createClient } from "@supabase/supabase-js";

// 環境変数からSupabaseの接続情報を取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// 空の文字列でも作成は可能（実際のアクセスはエラーになる可能性あり）
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 環境変数チェック関数 - 他のファイルで使用されているため追加
export function isSupabaseAvailable() {
  return !!supabaseUrl && !!supabaseAnonKey;
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
