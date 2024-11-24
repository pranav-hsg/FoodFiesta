import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaurants: any[] = [
    {
      name: 'Biryani King',
      cuisine: 'Indian',
      location: 'New Delhi',
      rating: 5,
      reviews: 230,
      menu: [
        {
          item: 'Hyderabadi Biryani',
          price: '₹250',
          toppings: [
            { name: 'Extra Chicken', price: '₹50' },
            { name: 'Raita', price: '₹30' },
            { name: 'Boiled Egg', price: '₹20' },
          ],
        },
        {
          item: 'Butter Chicken',
          price: '₹200',
          toppings: [
            { name: 'Extra Gravy', price: '₹40' },
            { name: 'Cheese', price: '₹30' },
          ],
        },
        {
          item: 'Garlic Naan',
          price: '₹40',
          toppings: [
            { name: 'Cheese', price: '₹20' },
            { name: 'Coriander', price: '₹10' },
          ],
        },
      ],
      customerReviews: ['"The best biryani I have ever tasted!" - Rahul M.', '"Delicious food with great ambiance." - Aarti P.'],
      imageUrl: 'assets/bir.jpg',
    },
    {
      name: 'Chaat Chowk',
      cuisine: 'Indian',
      location: 'Mumbai',
      rating: 4,
      reviews: 150,
      menu: [
        {
          item: 'Pani Puri',
          price: '₹50',
          toppings: [
            { name: 'Extra Pani', price: '₹20' },
            { name: 'Sev', price: '₹10' },
          ],
        },
        {
          item: 'Bhel Puri',
          price: '₹40',
          toppings: [
            { name: 'Chana', price: '₹15' },
            { name: 'Onions', price: '₹5' },
          ],
        },
        {
          item: 'Aloo Tikki',
          price: '₹30',
          toppings: [
            { name: 'Cheese', price: '₹15' },
            { name: 'Pineapple', price: '₹10' },
          ],
        },
      ],
      customerReviews: ['"Authentic chaat with great taste!" - Sandeep K.', '"Perfect place to satisfy your chaat cravings." - Priya G.'],
      imageUrl: 'assets/download.jpg',
    },
    {
      name: 'Swaad PiZutra',
      cuisine: 'Indian',
      location: 'Bengaluru',
      rating: 4,
      reviews: 100,
      menu: [
        {
          item: 'Gol Pizza',
          price: '₹100',
          toppings: [
            { name: 'Olives', price: '₹20' },
            { name: 'Jalapenos', price: '₹15' },
          ],
        },
        {
          item: 'Royal Pizza',
          price: '₹220',
          toppings: [
            { name: 'Extra Cheese', price: '₹40' },
            { name: 'Bacon', price: '₹50' },
            { name: 'Pineapple', price: '₹30' },
          ],
        },
        {
          item: 'Super Chips',
          price: '₹80',
          toppings: [
            { name: 'Cheese Sauce', price: '₹20' },
            { name: 'Chili Flakes', price: '₹10' },
          ],
        },
      ],
      customerReviews: ['"Great South Indian food." - Harish N.', '"Must-try for breakfast lovers!" - Radhika T.'],
      imageUrl: 'assets/swad.jpg',
    },
    {
      name: 'Royal Pizzeria',
      cuisine: 'Indian',
      location: 'Chandigarh',
      rating: 3,
      reviews: 85,
      menu: [
        {
          item: 'Rajma Pizza',
          price: '₹120',
          toppings: [
            { name: 'Extra Cheese', price: '₹30' },
            { name: 'Corn', price: '₹20' },
            { name: 'Onions', price: '₹15' },
          ],
        },
        {
          item: 'Aloo Finger Chips',
          price: '₹80',
          toppings: [
            { name: 'Garlic Mayo', price: '₹25' },
            { name: 'Cheese', price: '₹20' },
          ],
        },
        {
          item: 'Special Pizza',
          price: '₹200',
          toppings: [
            { name: 'Pepperoni', price: '₹40' },
            { name: 'Olives', price: '₹15' },
          ],
        },
      ],
      customerReviews: ['"Simple yet delicious North Indian food." - Vikram S.', '"Good home-style food at affordable prices." - Anita R.'],
      imageUrl: 'assets/pizzeria.jpg',
    },
    {
      name: 'Biryani King',
      cuisine: 'Indian',
      location: 'New Delhi',
      rating: 5,
      reviews: 230,
      menu: [
        {
          item: 'Hyderabadi Biryani',
          price: '₹250',
          toppings: [
            { name: 'Extra Spice', price: '₹20' },
            { name: 'Boiled Egg', price: '₹30' },
          ],
        },
        {
          item: 'Butter Chicken',
          price: '₹200',
          toppings: [
            { name: 'Extra Gravy', price: '₹50' },
            { name: 'Butter Naan', price: '₹40' },
          ],
        },
        {
          item: 'Garlic Naan',
          price: '₹40',
          toppings: [
            { name: 'Cheese', price: '₹30' },
            { name: 'Chili Flakes', price: '₹10' },
          ],
        },
      ],
      customerReviews: ['"The best biryani I have ever tasted!" - Rahul M.', '"Delicious food with great ambiance." - Aarti P.'],
      imageUrl: 'assets/bir.jpg',
    },
    {
      name: 'Chaat Chowk',
      cuisine: 'Indian',
      location: 'Mumbai',
      rating: 4,
      reviews: 150,
      menu: [
        {
          item: 'Pani Puri',
          price: '₹50',
          toppings: [
            { name: 'Extra Pani', price: '₹20' },
            { name: 'Sev', price: '₹10' },
          ],
        },
        {
          item: 'Bhel Puri',
          price: '₹40',
          toppings: [
            { name: 'Chana', price: '₹15' },
            { name: 'Onions', price: '₹5' },
          ],
        },
        {
          item: 'Aloo Tikki',
          price: '₹30',
          toppings: [
            { name: 'Cheese', price: '₹15' },
            { name: 'Pineapple', price: '₹10' },
          ],
        },
      ],
      customerReviews: ['"Authentic chaat with great taste!" - Sandeep K.', '"Perfect place to satisfy your chaat cravings." - Priya G.'],
      imageUrl: 'assets/download.jpg',
    },
    {
      name: 'Pancake Haven',
      cuisine: 'American',
      location: 'Noida',
      rating: 4,
      reviews: 80,
      menu: [
        {
          item: 'Buttermilk Pancakes',
          price: '₹150',
          toppings: [
            { name: 'Maple Syrup', price: '₹30' },
            { name: 'Blueberries', price: '₹20' },
          ],
        },
        {
          item: 'Chocolate Pancakes',
          price: '₹200',
          toppings: [
            { name: 'Chocolate Chips', price: '₹30' },
            { name: 'Whipped Cream', price: '₹25' },
          ],
        },
        {
          item: 'Banana Pancakes',
          price: '₹180',
          toppings: [
            { name: 'Peanut Butter', price: '₹20' },
            { name: 'Honey', price: '₹10' },
          ],
        },
      ],
      customerReviews: ['"Fluffy and delicious, a perfect breakfast!" - Natasha K.', '"Best pancakes I have had in Delhi NCR." - Varun S.'],
      imageUrl: 'assets/pancakes.jpg',
    },
    {
      name: 'Pasta Perfection',
      cuisine: 'Italian',
      location: 'Pune',
      rating: 4,
      reviews: 90,
      menu: [
        {
          item: 'Spaghetti Bolognese',
          price: '₹220',
          toppings: [
            { name: 'Parmesan Cheese', price: '₹30' },
            { name: 'Olives', price: '₹20' },
          ],
        },
        {
          item: 'Penne Arrabbiata',
          price: '₹180',
          toppings: [
            { name: 'Garlic Bread', price: '₹40' },
            { name: 'Basil Leaves', price: '₹10' },
          ],
        },
        {
          item: 'Carbonara',
          price: '₹250',
          toppings: [
            { name: 'Bacon', price: '₹30' },
            { name: 'Extra Parmesan', price: '₹20' },
          ],
        },
      ],
      customerReviews: ['"The pasta was perfectly cooked and flavorful." - Julia D.', '"Authentic Italian experience in Pune!" - Aniket S.'],
      imageUrl: 'assets/pasta_perfection.jpg',
    },
  ];

  selectedRestaurant = {};
}
