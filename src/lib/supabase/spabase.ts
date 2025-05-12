import { createClient } from "@supabase/supabase-js";

// 環境変数からSupabaseの接続情報を取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 環境変数が設定されていない場合はエラーを表示
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabaseの環境変数が設定されていません。");
}

// Supabaseクライアントの作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
