export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "cheese Pizza",
      price: 1500,
      image:
        "https://as1.ftcdn.net/v2/jpg/01/33/61/72/1000_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg",
    },

    {
        id: 2,
        name: "Veggies Pizza",
        price: 1200,
        image:
          "https://t4.ftcdn.net/jpg/02/55/57/33/240_F_255573369_NrbcMNYC1hz1xJigxCOCN8OXsxmtx0TB.jpg",
      },

      {
        id: 3,
        name: "Fajita Pizza",
        price: 1800,
        image:
          "https://img.freepik.com/premium-photo/appetizing-sliced-pizza-with-sausage-tomatoes-parmezan-cheese-perrer-olives-wooden-table-menu-photo_201836-425.jpg",
      },
     
      {
        id: 4,
        name: "Afghani Tika Pizza",
        price: 2000,
        image:
          "https://dha.cafeela.pk/wp-content/uploads/2022/10/chicken-tikka-pizza.jpg",
      },

      {
        id: 5,
        name: "Chicken Masla Pizza",
        price: 2200,
        image:
          "https://img.freepik.com/free-photo/side-view-salami-pizza-with-bell-pepper-tomatoes-olives-rolling-pin-with-flour_141793-14249.jpg",
      },

      {
        id: 6,
        name: "Chicken Masla Pizza",
        price: 2400,
        image:
          "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg",
      },
  ];
  res.status(200).json(products);
  
}
