import supabase from "./supabase";

export async function getJournis() {
  const { data: journis, error } = await supabase.from("Journis").select("*");

  if (error) {
    console.error(error);
    throw new Error("Journis could not be load");
  }

  return journis;
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
