import { supabase, type News } from "@/lib/supabase/spabase";
// ニュース一覧を取得する関数（最新順）
export async function getNews(limit = 10) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("date", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("ニュースの取得エラー:", error);
    return [];
  }

  return data as News[];
}

// 特定のニュースを取得する関数
export async function getNewsById(id: string) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`ID:${id}のニュース取得エラー:`, error);
    return null;
  }

  return data as News;
}

// ニュースを作成する関数
export async function createNews(news: Omit<News, "id" | "created_at">) {
  const { data, error } = await supabase.from("news").insert([news]).select();

  if (error) {
    console.error("ニュースの作成エラー:", error);
    return null;
  }

  return data[0] as News;
}

// ニュースを更新する関数
export async function updateNews(
  id: string,
  news: Partial<Omit<News, "id" | "created_at">>
) {
  const { data, error } = await supabase
    .from("news")
    .update(news)
    .eq("id", id)
    .select();

  if (error) {
    console.error(`ID:${id}のニュース更新エラー:`, error);
    return null;
  }

  return data[0] as News;
}

// ニュースを削除する関数
export async function deleteNews(id: string) {
  const { error } = await supabase.from("news").delete().eq("id", id);

  if (error) {
    console.error(`ID:${id}のニュース削除エラー:`, error);
    return false;
  }

  return true;
}
