import { supabase, type GalleryImage } from "@/lib/supabase/spabase";

// ギャラリー画像一覧を取得する関数（最新順）
export async function getGalleryImages(limit = 20) {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("ギャラリー画像の取得エラー:", error);
    return [];
  }

  return data as GalleryImage[];
}

// 特定のギャラリー画像を取得する関数
export async function getGalleryImageById(id: string) {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`ID:${id}のギャラリー画像取得エラー:`, error);
    return null;
  }

  return data as GalleryImage;
}

// ギャラリー画像を作成する関数（画像のアップロード＋メタデータの保存）
export async function createGalleryImage(
  file: File,
  metadata: Omit<GalleryImage, "id" | "image_url" | "created_at">
) {
  // 1. 画像をストレージにアップロード
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `gallery/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("images")
    .upload(filePath, file);

  if (uploadError) {
    console.error("ギャラリー画像のアップロードエラー:", uploadError);
    return null;
  }

  // 2. 画像の公開URLを取得
  const { data: urlData } = supabase.storage
    .from("images")
    .getPublicUrl(filePath);

  const publicUrl = urlData.publicUrl;

  // 3. メタデータをデータベースに保存
  const { data, error } = await supabase
    .from("gallery")
    .insert([
      {
        ...metadata,
        image_url: publicUrl,
      },
    ])
    .select();

  if (error) {
    console.error("ギャラリーメタデータの保存エラー:", error);
    return null;
  }

  return data[0] as GalleryImage;
}

// ギャラリー画像を更新する関数（メタデータのみ）
export async function updateGalleryImage(
  id: string,
  metadata: Partial<Omit<GalleryImage, "id" | "image_url" | "created_at">>
) {
  const { data, error } = await supabase
    .from("gallery")
    .update(metadata)
    .eq("id", id)
    .select();

  if (error) {
    console.error(`ID:${id}のギャラリー画像更新エラー:`, error);
    return null;
  }

  return data[0] as GalleryImage;
}

// ギャラリー画像を削除する関数（データベース＋ストレージ）
export async function deleteGalleryImage(id: string, imagePath: string) {
  // 1. データベースからエントリを削除
  const { error: dbError } = await supabase
    .from("gallery")
    .delete()
    .eq("id", id);

  if (dbError) {
    console.error(`ID:${id}のギャラリー画像削除エラー:`, dbError);
    return false;
  }

  // 2. ストレージから画像を削除
  // imagePath例: 'gallery/1234567890.jpg'
  const { error: storageError } = await supabase.storage
    .from("images")
    .remove([imagePath]);

  if (storageError) {
    console.error(`画像ファイル削除エラー:`, storageError);
    // データベースからは削除できたので、部分的に成功と見なす
  }

  return true;
}
