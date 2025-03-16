import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const users =[
  {
    "name": "Sophia Reynolds",
    "date": "3 days ago",
    "rating": 5,
    "review": "Absolutely love my new bicycle! The quality is top-notch and the ride is super smooth.",
    "imageUrl": "https://cdn-01.cms-ap-v2i.applyflow.com/pinnacle-people/wp-content/uploads/2023/09/slide-2.png"
  },
  {
    "name": "Michael Carter",
    "date": "1 week ago",
    "rating": 4.5,
    "review": "Great customer service and the bicycle is amazing!",
    "imageUrl": "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    "name": "Emma Johnson",
    "date": "5 days ago",
    "rating": 4,
    "review": "Solid build and stylish design. Just wish the seat was a bit more comfortable.",
    "imageUrl": "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    "name": "Daniel Smith",
    "date": "2 weeks ago",
    "rating": 5,
    "review": "Best bike I’ve ever owned! Lightweight and easy to ride. Would highly recommend!",
    "imageUrl": "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    "name": "Olivia Martinez",
    "date": "6 days ago",
    "rating": 4.5,
    "review": "Smooth ride, great build quality. Perfect for daily commutes!",
    "imageUrl": "https://randomuser.me/api/portraits/women/30.jpg"
  },
  {
    "name": "Ethan Wilson",
    "date": "3 weeks ago",
    "rating": 4,
    "review": "Nice bike overall, but the assembly instructions could be clearer.",
    "imageUrl": "https://randomuser.me/api/portraits/men/35.jpg"
  },
  {
    "name": "Isabella Thompson",
    "date": "8 days ago",
    "rating": 5,
    "review": "Super stylish and rides like a dream. Definitely worth the price!",
    "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg"
  },
  {
    "name": "Liam Brown",
    "date": "4 days ago",
    "rating": 4.5,
    "review": "The performance is great and the design is sleek. Love the attention to detail!",
    "imageUrl": "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    "name": "Ava Davis",
    "date": "2 days ago",
    "rating": 5,
    "review": "Perfect for long rides. The battery life on the e-bike is excellent!",
    "imageUrl": "https://randomuser.me/api/portraits/women/50.jpg"
  }
]

