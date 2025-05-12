import {
  supabase,
  type News,
  isSupabaseAvailable,
} from "@/lib/supabase/spabase";

// モックデータ
const mockNews: News[] = [
  {
    id: "1",
    title: "夏季限定！涼しくさっぱりスペシャルコース",
    content:
      "暑い夏を快適に過ごせるよう、ひんやりクールシャンプーと特別なカットを組み合わせたスペシャルコースをご用意しました。7月1日から8月31日までの期間限定です。",
    date: "2025-07-01",
    isImportant: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "新しいトリマーが加わりました",
    content:
      "経験豊富なトリマーの山田さんが新しく加わりました。特に小型犬のカットを得意としています。どうぞよろしくお願いいたします。",
    date: "2025-06-15",
    isImportant: false,
    created_at: new Date().toISOString(),
  },
];

// ニュース一覧を取得する関数（最新順）
export async function getNews(limit = 10) {
  // Supabase利用不可の場合はモックデータを返す
  if (!isSupabaseAvailable() || !supabase) {
    console.log("モックニュースデータを使用します");
    return mockNews.slice(0, limit);
  }

  try {
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
  } catch (e) {
    console.error("Supabaseアクセスエラー:", e);
    return mockNews.slice(0, limit);
  }
}

// 特定のニュースを取得する関数
export async function getNewsById(id: string) {
  // Supabase利用不可の場合はモックデータから検索
  if (!isSupabaseAvailable() || !supabase) {
    return mockNews.find((item) => item.id === id) || null;
  }

  try {
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
  } catch (e) {
    console.error("Supabaseアクセスエラー:", e);
    return mockNews.find((item) => item.id === id) || null;
  }
}

// ニュースを作成する関数
export async function createNews(news: Omit<News, "id" | "created_at">) {
  // Supabase利用不可の場合はエラー
  if (!isSupabaseAvailable() || !supabase) {
    console.error("Supabaseが利用できないため、ニュースを作成できません");
    return null;
  }

  try {
    const { data, error } = await supabase.from("news").insert([news]).select();

    if (error) {
      console.error("ニュースの作成エラー:", error);
      return null;
    }

    return data[0] as News;
  } catch (e) {
    console.error("Supabaseアクセスエラー:", e);
    return null;
  }
}

// ニュースを更新する関数
export async function updateNews(
  id: string,
  news: Partial<Omit<News, "id" | "created_at">>
) {
  // Supabase利用不可の場合はエラー
  if (!isSupabaseAvailable() || !supabase) {
    console.error("Supabaseが利用できないため、ニュースを更新できません");
    return null;
  }

  try {
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
  } catch (e) {
    console.error("Supabaseアクセスエラー:", e);
    return null;
  }
}

// ニュースを削除する関数
export async function deleteNews(id: string) {
  // Supabase利用不可の場合はエラー
  if (!isSupabaseAvailable() || !supabase) {
    console.error("Supabaseが利用できないため、ニュースを削除できません");
    return false;
  }

  try {
    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) {
      console.error(`ID:${id}のニュース削除エラー:`, error);
      return false;
    }

    return true;
  } catch (e) {
    console.error("Supabaseアクセスエラー:", e);
    return false;
  }
}
