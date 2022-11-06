// filter array

let filterarray = [];

let galleryarray = [
  {
    id: 1,
    name: "halloween t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/56580c/4234580110/il_1588xN.4234580110_97hz.jpg",
    desc: "Personalized Halloween T-Shirt Spooky Tee Matching Personalised Tshirt Ghost Tshirt Witch Tee Unisex Tee Witch Tee His and Hers Tee BFF Tees",
  },

  {
    id: 2,
    name: "inhale sweatshirt",
    src: "https://i.etsystatic.com/34632538/r/il/980e69/4346503803/il_1588xN.4346503803_ey9d.jpg",
    desc: "Inhale Exhale Sweatshirt Mindful Shirt Minimalist Sweater Unisex Mens Womens Minimalist Sweater Aesthetic Sweatshirt",
  },

  {
    id: 3,
    name: "basic witch t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/f26e26/4234688870/il_1588xN.4234688870_804t.jpg",
    desc: "Basic Witch T-Shirt Witchy Tee Aesthetic Tshirt Spiritual Tshirt Unisex Gift for Girls Halloween Tee Spooky Tee",
  },

  {
    id: 4,
    name: "almond blossom sweater",
    src: "https://i.etsystatic.com/34632538/r/il/3ea4ae/4322780833/il_1588xN.4322780833_r9pm.jpg",
    desc: "Almond Blossom Vincent Van Gogh Sweater Womens Unisex Sweatshirt Famous Painting Gift for Artist Expressionist Dutch Art Floral Sweater",
  },

  {
    id: 5,
    name: "pink roses t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/e20de6/4202631146/il_1588xN.4202631146_m9cq.jpg",
    desc: "Pink Roses T-Shirt Tee Floral Womens Tee Artist Gift Famous Painting Tshirt Unisex Tee Roses By Francis Campbell Boileau Cadell",
  },

  {
    id: 6,
    name: "nebula t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/b6f661/4275324680/il_1588xN.4275324680_j74t.jpg",
    desc: "Nebula taken from Space by Telescope T-Shirt Astronomy Tee Womens Tee Celestial Tshirt Unisex Gift for Astrologer Stars Galaxy Tee",
  },

  {
    id: 7,
    name: "celestial planets t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/1c459a/3750207392/il_1588xN.3750207392_hzd2.jpg",
    desc: "Celestial Planets T-Shirt Minimal Hand Drawn Tee Witchy Womens Unisex Shirt Moon Tee Astronomy Spiritual Tee Zodiac Shirt Sun and Moon Tee",
  },

  {
    id: 8,
    name: "witches cauldron sweatshirt",
    src: "https://i.etsystatic.com/34632538/r/il/f8cb10/4282408845/il_1588xN.4282408845_nxqr.jpg",
    desc: "Witches Cauldron Sweater Witch Quote Macbeth Top Aesthetic Sweatshirt Spiritual Tee Unisex Halloween Spooky Sweater Shakespeare Tee",
  },

  {
    id: 9,
    name: "renoir roses t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/3baf64/3807052741/il_1588xN.3807052741_l61k.jpg",
    desc: "Renoir Roses T-Shirt Graphic Tee Floral Womens Tee Artist Gift Famous Painting Tshirt Unisex Tee Roses By Pierre Auguste Renoir",
  },

  {
    id: 10,
    name: "pink cloud t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/6f18a0/4052252464/il_1588xN.4052252464_ny1y.jpg",
    desc: "The Pink Cloud Henri-Edmond Cross T-Shirt Graphic Tee Womens Tee Artist Gift Famous Painting Tshirt Unisex Gift for Artist Impressionist",
  },

  {
    id: 11,
    name: "titania asleep t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/f0e307/4227362519/il_1588xN.4227362519_eta6.jpg",
    desc: "Titania Asleep by John Simmons A Midsummer Nights Dream T-Shirt Famous Painting Tee Unisex Womens Gift for Artist Shakespeare Tshirt",
  },

  {
    id: 12,
    name: "anime girl t-shirt",
    src: "https://i.etsystatic.com/34632538/r/il/ceebf0/3747816022/il_1588xN.3747816022_5ni6.jpg",
    desc: "Anime Girl T-Shirt Manga Tee Womens Unisex Shirt Graphic Tee Japanese Tshirt Aesthetic Tee",
  },
];

// create a function to show gallery

showgallery(galleryarray);

function showgallery(currarray) {
  document.getElementById("card").innerText = "";

  for (var i = 0; i < currarray.length; i++) {
    document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3">
        <div class="card p-3 ps-5 pe-5">
        <h4 class="text-capitalize text-center pt-3 pb-3">${currarray[i].name}</h4>
        <img src="${currarray[i].src}" width="100%" height="310px" style="border-radius: 5px"/>
        <p class="mt-2" >${currarray[i].desc}</p>
        <button class="btn btn-light bg-light text-dark w-100 mx-auto">More</button>
        </div>
        </div>
        `;
  }
}

// live searching using keyup input

document.getElementById("myinput").addEventListener("keyup", function () {
  let text = document.getElementById("myinput").value;

  filterarray = galleryarray.filter(function (a) {
    if (a.name.includes(text)) {
      return a.name;
    }
  });
  if (this.value == "") {
    showgallery(galleryarray);
  } else {
    if (filterarray == "") {
      document.getElementById("para").style.display = "block";
      document.getElementById("card").innerHTML = "";
    } else {
      showgallery(filterarray);
      document.getElementById("para").style.display = "none";
    }
  }
});
