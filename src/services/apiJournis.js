import supabase, { supabaseUrl } from "./supabase";

export async function getJournis() {
  const { data: journis, error } = await supabase.from("Journis").select("*");

  if (error) {
    console.error(error);
    throw new Error("Journis could not be load");
  }

  return journis;
}

export async function deleteJourni(id) {
  const { data: journi, error } = await supabase
    .from("Journis")
    .delete()
    .eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Journi could not be deleted");
  }

  return journi;
}

export async function createEditJourni(newJourni, id) {
  const hasImagePath = newJourni.thumbnail?.startsWith?.(supabaseUrl);
  const thumbnailName = `${Math.random()}--${
    newJourni.thumbnail.name
  }`.replaceAll("/", "");
  const thumbnailPath = hasImagePath
    ? newJourni.thumbnail
    : `${supabaseUrl}/storage/v1/object/JourniImages/${thumbnailName}`[0];

  let query = supabase.from("Journis");
  // Create
  if (!id)
    query = query.insert([
      {
        ...newJourni,
        thumbnail: thumbnailPath,
      },
    ]);

  //edit
  if (id)
    query = query
      .update({
        ...newJourni,
        thumbnail: thumbnailPath,
      })
      .eq("id", id)
      .select();

  const { data: journi, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Journi could not be created");
  }
  // Upload thumbnail
  if (hasImagePath) return journi;

  const { error: storageError } = await supabase.storage
    .from("JourniImages")
    .upload(thumbnailName, newJourni.thumbnail);

  // delete cabin if error uploading image
  if (storageError) {
    await supabase.from("Journis").delete().eq("id", journi.id);
    console.error(storageError);
    throw new Error(
      "Journi image could not be uploaded and Journi was not created"
    );
  }
  return journi;
}
