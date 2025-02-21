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

export async function createNewJourni(newJourni) {
  const { data: journi, error } = await supabase
    .from("Journis")
    .insert([newJourni])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Journis could not be load");
  }

  return journi;
}

export async function createEditJourni(newJourni, id) {
  const hasImagePath = newJourni.thumbnail?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}--${newJourni.thumbnail.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newJourni.thumbnail
    : `${supabaseUrl}/storage/v1/object/JourniImages/${imageName}`[0];

  let query = supabase.from("Journis");
  // Create
  if (!id) query = query.insert([{ ...newJourni, thumbnail: imagePath }]);
  //edit
  if (id)
    query = query
      .update({ ...newJourni, thumbnail: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select.single();

  if (error) {
    console.error(error);
    throw new Error("Journi could not be created");
  }
  // Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("JourniImages")
    .upload(imageName, newJourni.image);

  // delete cabin if error uploading image
  if (storageError) {
    await supabase.from("Journis").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Journi image could not be uploaded and Journi was not created"
    );
  }
  return data;
}

// export async function getImages() {
//   const {data, error} = await supabase.storage.from('JournImages').list(user?.id + '/', {
//     limit: 100,
//     offset: 0,
//     sortBy: {column: 'name', order: 'asc'}
//   });
//   if(data !== null) {
//     return data
//   } else {
//     console.log(error)
//   }
// }
// export async function uploadImages(evt) {
//   let file = evt.target.files[0];

//   const {data, error} = await supabase.storage.from('JourniImages').upload(user.id + '/' + file);

//   if(data) {
//     getImages();
//   } else {
//     console.log(error);
//   }

// }
