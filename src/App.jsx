import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button className="text-white text-2xl mr-4 h-9 w-9">
          <img src="/src/assets/menu.png" className="h-7    " />
        </button>
        <span className="text-xl font-bold">DistribuHub</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-400 font-bold">About Us</a>
        <a href="#" className="hover:text-gray-400 font-bold">Categories</a>
        
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-4xl font-bold justify-center">Sign In</button>
    </nav>
  );
};

const Hero = () => {
return (
    <section className="bg-white text-black p-8 md:p-16 text-center">
      <div className="bg-black text-white p-8 md:p-16 rounded-4xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Buy your dream plants</h1>
      <p className="text-lg md:text-xl mb-8">50+ Plant Species | 100+ Customers</p>
      <div className="relative max-w-md mx-auto ">
        <input
          type="text"
          className="w-full p-4 rounded-full text-black bg-white border-white"
          placeholder="What are you looking for?"
        />
        <button className="absolute right-0 top-0 mt-2 mr-2 bg-black text-white p-3 rounded-full">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="mt-8">
        <img
          src="/src/assets/img1.jpg"
        //   alt="A hand holding a potted plant"
          className="mx-auto rounded-full h-"
          width="300"
          height="300"
        />
      </div>
      </div>
    </section>
  );
};

const BestSelling = () => {
    const products = [
        { name: "Natural Plants", price: "₹ 1,400.00", img: "/src/assets/img2.jpg" },
        { name: "Artificial Plants", price: "₹ 900.00", img: "/src/assets/img3.jpg" },
        { name: "Decorative Artificial Plants", price: "₹ 3,500.00", img: "/src/assets/img4.jpg" },
    ];

    return (
        <section className="p-8 md:p-16 flex">
            <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Best Selling Plants</h2>
            <p className="text-lg mb-8">Easiest way to a healthy life by buying <br />
                your favorite plants</p>
            {/* <div className="text-center mt-8"></div> */}
            <button className="bg-black text-white px-8 py-4 rounded-full">See more</button>
            </div>
            <div className="scale-105">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="text-left mx-6">
                        <img src={product.img} alt={product.name} className="mx-auto mb-4 rounded-lg" width="400" height="300" />
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-gray-400 font-bold">{product.price}</p>
                    </div>
                ))}
            </div>
            </div>
            
        </section>
    );
};

const AboutUs = () => {
    const features = [
      {
        icon: "fas fa-seedling",
        title: "Large Assortment",
        description:
          "We offer many different types of products with fewer variations in each category.",
      },
      {
        icon: "fas fa-shipping-fast",
        title: "Fast & Free Shipping",
        description:
          "4-day or less delivery time, free shipping and an expedited delivery option.",
      },
      {
        icon: "fas fa-phone-alt",
        title: "24/7 Support",
        description:
          "Answers to any business-related inquiry 24/7 and in real-time.",
      },
    ];
  
    return (
      <div className="bg-white text-gray-800 py-12 px-4 md:px-0 items-center justify-center my-16">
        <div className="container mx-auto text-center mb-12">
          <h1 className="text-2xl font-bold ">About Us</h1>
          <p className="text-gray-600">Order now and appreciate the beauty of nature</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center px-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center my-4 py-5">
              <div className="flex justify-center mb-4">
                <div className="bg-black rounded-full p-10">
                  <i className={`${feature.icon} text-white text-3xl`}></i>
                </div>
              </div>
              <h2 className="text-lg font-bold">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

const Categories = () => {
    const categories = [
      {
        name: "Natural Plants",
        image: "https://storage.googleapis.com/a1aa/image/SvUeajlBYNByAR1NRGO2_XPNwyfGKCSSUgSINiS5qPY.jpg",
        description: "A collection of small potted plants on a wooden surface.",
      },
      {
        name: "Plant Accessories",
        image: "https://storage.googleapis.com/a1aa/image/iXbrdByia9TnHh5oOP8IWAluSHuRKau0IoX34eGTwaY.jpg",
        description: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Artificial Plants",
        image: "https://storage.googleapis.com/a1aa/image/gCWfe9VywydL3vMFdlrARimeDnd1TIF0_70P5D0XIcQ.jpg",
        description: "A collection of artificial plants in a modern living room.",
      },
    ];
  
    return (
        <div>
           <div className="relative my-32 bottom-16 flex flex-col items-center">
             <h1 className="text-4xl font-bold ">Categories</h1>
            <p className="text-gray-400 text-lg">Find what you are looking for</p>
           </div>
            <div className="bg-black text-white min-h-screen flex flex-col items-center my-20">
        
       
        <div className="flex flex-wrap justify-center gap-48 px-8 mt-20">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg w-64 scale-125 ">
              <img src={category.image} alt={category.name} className="w-full h-96 object-cover" />
              <div className="p-4 text-center">
                <p className="text-black font-semibold">{category.name}</p>
                <p className="text-gray-500 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
           <button className="relative bg-white text-black px-8 py-4 rounded-full bottom-12 font-bold">Explore</button>
        </div>
      </div>
        </div>
      
    );
  };    

 
  const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 p-8 md:p-10 flex justify-end h-72">
        <div className="container mx-auto">
            <p className="text-gray-400">We help you find your dream plant</p>
            <button>
                <i className="fab fa-facebook text-white"></i>
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Information</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Product</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Community</a></li>
              <li><a href="#" className="hover:text-gray-400">Career</a></li>
              <li><a href="#" className="hover:text-gray-400">Our Story</a></li>
              <li><a href="#" className="hover:text-gray-400">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Getting Started</a></li>
              <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-400">Resources</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
const Testimonials = () => {
  const testimonials = [
    {
      text: "Great selection of plants and amazing customer service!",
      name: "John Doe",
      role: "Customer",
      image: "https://placehold.co/100x100",
      rating: 5,
    },
    {
      text: "Fast shipping and high-quality plants. Highly recommend!",
      name: "Jane Smith",
      role: "Customer",
      image: "https://placehold.co/100x100",
      rating: 4.5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        What customers say about <span className="text-black">GREEMIND?</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-black text-white p-6 rounded-lg flex flex-col justify-between">
            <p className="mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
              <div className="ml-auto flex items-center">
                <i className="fas fa-star text-yellow-500"></i>
                <span className="ml-2">{testimonial.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlantShop = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BestSelling />
      <AboutUs />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default PlantShop;
