import { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  Menu,
  X,
  ArrowUp,
  Heart,
  Users,
  Calendar,
  Award,
  ChefHat,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  UtensilsCrossed,
  Sparkles,
  Leaf,
  ShieldCheck,
  Timer,
  Crown,
  Flame,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSpecialDay, setCurrentSpecialDay] = useState(0);
  const [activeMenuCategory, setActiveMenuCategory] = useState('starters');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = ['home', 'about', 'menu', 'offers', 'gallery', 'reviews', 'reservation', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialDay((prev) => (prev + 1) % 7);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'offers', label: 'Special Offers' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'reservation', label: 'Reservation' },
    { id: 'contact', label: 'Contact' },
  ];

  const dailySpecials = [
    {
      day: 'Monday',
      dish: 'Butter Chicken with Garlic Naan',
      description: 'Tender chicken in rich tomato-based creamy gravy served with aromatic garlic naan',
      image: 'https://images.pexels.com/photos/9418616/pexels-photo-9418616.jpeg',
      price: 399,
      originalPrice: 550,
      discount: 28,
    },
    {
      day: 'Tuesday',
      dish: 'Paneer Lababdar Combo',
      description: 'Cottage cheese cubes in luscious tomato gravy with butter naan and jeera rice',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
      price: 349,
      originalPrice: 480,
      discount: 27,
    },
    {
      day: 'Wednesday',
      dish: 'Chicken Biryani Feast',
      description: 'Aromatic basmati rice layered with spiced chicken, raita, and salan',
      image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg',
      price: 449,
      originalPrice: 600,
      discount: 25,
    },
    {
      day: 'Thursday',
      dish: 'Tandoori Platter',
      description: 'Assorted tandoori delights: chicken tikka, seekh kebab, fish tikka with mint chutney',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      price: 599,
      originalPrice: 800,
      discount: 25,
    },
    {
      day: 'Friday',
      dish: 'Street Food Festival',
      description: 'Chole bhature, gol gappas, aloo tikki, and pav bhaji - a street food extravaganza',
      image: 'https://images.pexels.com/photos/5409836/pexels-photo-5409836.jpeg',
      price: 299,
      originalPrice: 450,
      discount: 34,
    },
    {
      day: 'Saturday',
      dish: 'Royal Mughlai Dinner',
      description: 'Five-course Mughlai feast with kebabs, curries, biryani, and desserts',
      image: 'https://images.pexels.com/photos/11145972/pexels-photo-11145972.jpeg',
      price: 799,
      originalPrice: 1100,
      discount: 27,
    },
    {
      day: 'Sunday',
      dish: 'Family Buffet Special',
      description: 'All-you-can-eat buffet with 30+ dishes including live counters and desserts',
      image: 'https://images.pexels.com/photos/769289/food-food-service-hands-769289.jpeg',
      price: 549,
      originalPrice: 750,
      discount: 27,
    },
  ];

  const menuCategories = {
    starters: {
      name: 'Starters',
      icon: <Flame className="w-5 h-5" />,
      items: [
        { name: 'Paneer Tikka', description: 'Marinated cottage cheese cubes grilled to perfection', price: 280, isVeg: true },
        { name: 'Hara Bhara Kebab', description: 'Spinach and pea patties with herbs and spices', price: 220, isVeg: true },
        { name: 'Chicken Tikka', description: 'Succulent chicken pieces marinated in yogurt and spices', price: 320, isVeg: false },
        { name: 'Seekh Kebab', description: 'Minced lamb skewers with aromatic spices', price: 380, isVeg: false },
        { name: 'Fish Amritsari', description: 'Crispy fried fish with gram flour coating', price: 340, isVeg: false },
        { name: 'Dahi Bhalle', description: 'Lentil dumplings in spiced yogurt with chutneys', price: 180, isVeg: true },
      ],
    },
    maincourse: {
      name: 'Main Course',
      icon: <UtensilsCrossed className="w-5 h-5" />,
      items: [
        { name: 'Butter Chicken', description: 'Tender chicken in rich tomato-cream gravy', price: 380, isVeg: false },
        { name: 'Dal Makhani', description: 'Black lentils slow-cooked with butter and cream', price: 260, isVeg: true },
        { name: 'Shahi Paneer', description: 'Cottage cheese in rich cashew-based gravy', price: 290, isVeg: true },
        { name: 'Kadhai Chicken', description: 'Chicken cooked with bell peppers in spicy gravy', price: 360, isVeg: false },
        { name: 'Palak Paneer', description: 'Cottage cheese in creamy spinach gravy', price: 270, isVeg: true },
        { name: 'Rogan Josh', description: 'Aromatic lamb curry with Kashmiri spices', price: 420, isVeg: false },
      ],
    },
    breads: {
      name: 'Breads',
      icon: <Leaf className="w-5 h-5" />,
      items: [
        { name: 'Butter Naan', description: 'Soft leavened bread brushed with butter', price: 60, isVeg: true },
        { name: 'Garlic Naan', description: 'Naan topped with garlic and coriander', price: 80, isVeg: true },
        { name: 'Tandoori Roti', description: 'Whole wheat bread from clay oven', price: 40, isVeg: true },
        { name: 'Laccha Paratha', description: 'Layered whole wheat bread', price: 70, isVeg: true },
        { name: 'Stuffed Kulcha', description: 'Naan stuffed with paneer or onion', price: 90, isVeg: true },
        { name: 'Peshawari Naan', description: 'Sweet naan with nuts and raisins', price: 100, isVeg: true },
      ],
    },
    rice: {
      name: 'Rice & Biryani',
      icon: <ChefHat className="w-5 h-5" />,
      items: [
        { name: 'Veg Biryani', description: 'Fragrant basmati rice with mixed vegetables', price: 280, isVeg: true },
        { name: 'Chicken Biryani', description: 'Layered rice with spiced chicken and saffron', price: 340, isVeg: false },
        { name: 'Jeera Rice', description: 'Basmati rice tempered with cumin', price: 160, isVeg: true },
        { name: 'Mutton Biryani', description: 'Premium lamb biryani with aromatic spices', price: 420, isVeg: false },
        { name: 'Hyderabadi Biryani', description: 'Authentic dum-cooked biryani', price: 380, isVeg: false },
        { name: 'Pulao', description: 'Light rice pilaf with vegetables', price: 200, isVeg: true },
      ],
    },
    desserts: {
      name: 'Desserts',
      icon: <Heart className="w-5 h-5" />,
      items: [
        { name: 'Gulab Jamun', description: 'Deep-fried milk dumplings in sugar syrup', price: 120, isVeg: true },
        { name: 'Rasmalai', description: 'Soft cottage cheese patties in sweet milk', price: 140, isVeg: true },
        { name: 'Kulfi', description: 'Traditional Indian ice cream with pistachios', price: 130, isVeg: true },
        { name: 'Gajar Ka Halwa', description: 'Warm carrot pudding with dry fruits', price: 150, isVeg: true },
        { name: 'Kheer', description: 'Creamy rice pudding with cardamom', price: 120, isVeg: true },
        { name: 'Moong Dal Halwa', description: 'Rich lentil pudding with ghee', price: 160, isVeg: true },
      ],
    },
    beverages: {
      name: 'Beverages',
      icon: <Sparkles className="w-5 h-5" />,
      items: [
        { name: 'Masala Chai', description: 'Spiced Indian tea with milk', price: 60, isVeg: true },
        { name: 'Mango Lassi', description: 'Creamy mango yogurt smoothie', price: 100, isVeg: true },
        { name: 'Cold Coffee', description: 'Chilled coffee with ice cream', price: 120, isVeg: true },
        { name: 'Fresh Lime Soda', description: 'Refreshing lime drink with soda', price: 70, isVeg: true },
        { name: 'Buttermilk', description: 'Spiced yogurt drink', price: 60, isVeg: true },
        { name: 'Thandai', description: 'Traditional almond-flavored milk', price: 110, isVeg: true },
      ],
    },
  };

  const chefRecommendations = [
    {
      name: 'Dal Makhani Royale',
      description: 'Our signature slow-cooked lentils simmered for 24 hours with premium butter and cream, finished with dried fruits and silver leaf',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
      price: 520,
      rating: 4.9,
    },
    {
      name: 'Mutton Nihari',
      description: 'Traditional slow-cooked lamb shanks in rich aromatic gravy, served with freshly baked kulcha and raita',
      image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg',
      price: 580,
      rating: 4.8,
    },
    {
      name: 'Zafrani Paneer',
      description: 'Premium cottage cheese cubes in saffron-infused creamy gravy with cashews and golden raisins',
      image: 'https://images.pexels.com/photos/9418616/pexels-photo-9418616.jpeg',
      price: 480,
      rating: 4.7,
    },
  ];

  const galleryImages = [
    { src: 'https://images.pexels.com/photos/9418616/pexels-photo-9418616.jpeg', alt: 'Signature Dishes', span: 'col-span-2 row-span-2' },
    { src: 'https://images.pexels.com/photos/11145972/pexels-photo-11145972.jpeg', alt: 'Restaurant Interior', span: 'col-span-1 row-span-1' },
    { src: 'https://images.pexels.com/photos/769289/food-food-service-hands-769289.jpeg', alt: 'Fine Dining Experience', span: 'col-span-1 row-span-1' },
    { src: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg', alt: 'Biryani Platter', span: 'col-span-1 row-span-2' },
    { src: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg', alt: 'Tandoor Preparations', span: 'col-span-1 row-span-1' },
    { src: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg', alt: 'Curry Dishes', span: 'col-span-2 row-span-1' },
    { src: 'https://images.pexels.com/photos/5409836/pexels-photo-5409836.jpeg', alt: 'Street Food', span: 'col-span-1 row-span-1' },
    { src: 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg', alt: 'Private Events', span: 'col-span-1 row-span-1' },
  ];

  const reviews = [
    {
      name: 'Priya Mehta',
      review: 'One of the best dining experiences in Noida. The butter chicken was absolutely divine, and the ambiance was perfect for our anniversary dinner. The staff made us feel so special.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      date: '2 weeks ago',
    },
    {
      name: 'Amit Verma',
      review: 'Authentic flavors and excellent service. The mutton biryani transported me back to Hyderabad. Every dish was perfectly seasoned. Highly recommend the chef special platter.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      date: '1 month ago',
    },
    {
      name: 'Sneha Kapoor',
      review: 'Perfect place for family dinners. The buffet spread was incredible with so many options. Kids loved the live pasta counter. Will definitely come back for our next celebration.',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      date: '3 weeks ago',
    },
    {
      name: 'Rahul Singh',
      review: 'The dal makhani here is legendary. Slow-cooked to perfection, creamy and rich. The naan breads are the best I have had outside of Punjab. True authentic experience.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      date: '1 week ago',
    },
    {
      name: 'Anita Sharma',
      review: 'Hosted my parents 50th anniversary here. The team went above and beyond to make it special. The food was exceptional, especially the vegetarian options. Truly memorable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      date: '2 months ago',
    },
    {
      name: 'Vikram Malhotra',
      review: 'As a food critic, I have high standards. Spice Heaven exceeded them all. The chef table experience was extraordinary. Every dish told a story of heritage and passion.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      date: '3 months ago',
    },
  ];

  const whyChooseUs = [
    { icon: <Leaf className="w-8 h-8" />, title: 'Fresh Ingredients', description: 'Locally sourced, premium quality ingredients daily' },
    { icon: <Crown className="w-8 h-8" />, title: 'Authentic Recipes', description: 'Traditional recipes passed down through generations' },
    { icon: <ChefHat className="w-8 h-8" />, title: 'Expert Chefs', description: 'Award-winning chefs with 20+ years experience' },
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Hygienic Kitchen', description: 'FSSAI certified with highest hygiene standards' },
    { icon: <Timer className="w-8 h-8" />, title: 'Fast Service', description: 'Quick service without compromising quality' },
    { icon: <Award className="w-8 h-8" />, title: 'Premium Dining', description: 'Luxurious ambiance for memorable experiences' },
  ];

  const events = [
    {
      icon: <CakeIcon className="w-10 h-10" />,
      title: 'Birthday Parties',
      description: 'Make birthdays unforgettable with customized menus, decorations, and cake arrangements',
      image: 'https://images.pexels.com/photos/3825526/pexels-photo-3825526.jpeg',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Corporate Events',
      description: 'Impress clients and teams with our premium conference and dining facilities',
      image: 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Wedding Catering',
      description: 'Elegant catering for your special day with customized menus and impeccable service',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Family Gatherings',
      description: 'Private dining rooms for intimate celebrations with your loved ones',
      image: 'https://images.pexels.com/photos/769289/food-food-service-hands-769289.jpeg',
    },
  ];

  const faqs = [
    {
      question: 'Do you accept reservations?',
      answer: 'Yes, we highly recommend making reservations especially for weekends and special occasions. You can book online through our website or call us directly.',
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we have complimentary valet parking and a dedicated parking area for our guests. Street parking is also available nearby.',
    },
    {
      question: 'Do you offer vegetarian and vegan options?',
      answer: 'Absolutely! We have an extensive vegetarian menu with over 50 dishes. We also offer vegan options and can customize dishes upon request.',
    },
    {
      question: 'Can you accommodate food allergies?',
      answer: 'Yes, our kitchen is trained to handle food allergies. Please inform us while booking or mention it to your server, and we will ensure your safety.',
    },
    {
      question: 'Do you offer home delivery?',
      answer: 'Yes, we deliver within a 5 km radius. Orders can be placed through our website or major food delivery platforms like Zomato and Swiggy.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI, cash, and digital wallets. We also offer EMI options for large group bookings.',
    },
  ];

  const stats = [
    { value: 15, suffix: '+', label: 'Years of Excellence', icon: <Award className="w-6 h-6" /> },
    { value: 50, suffix: '+', label: 'Expert Chefs', icon: <ChefHat className="w-6 h-6" /> },
    { value: 100000, suffix: '+', label: 'Happy Customers', icon: <Heart className="w-6 h-6" /> },
    { value: 200, suffix: '+', label: 'Signature Dishes', icon: <UtensilsCrossed className="w-6 h-6" /> },
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#D4AF37] rounded-full animate-spin"></div>
            <UtensilsCrossed className="absolute inset-0 m-auto w-10 h-10 text-[#D4AF37]" />
          </div>
          <h2 className="text-2xl font-display text-[#D4AF37] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Spice Heaven</h2>
          <p className="text-gray-400 text-sm">Loading culinary excellence...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UtensilsCrossed className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Spice Heaven
                </h1>
                <p className="text-[10px] text-gray-400 tracking-wider uppercase">Fine Indian Dining</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <button
                onClick={() => scrollToSection('reservation')}
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Table
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-lg border-t border-gray-800 transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg text-left font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('reservation')}
              className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold rounded-lg"
            >
              Book a Table
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/9418616/pexels-photo-9418616.jpeg"
            alt="Indian Cuisine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#D4AF37]/20 rounded-full animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center lg:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-sm mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span>Authentic Indian Flavors, Crafted with Passion</span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-up"
              style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
            >
              Experience the
              <span className="block text-[#D4AF37]">Royal taste of India</span>
            </h1>

            <p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Indulge in the rich culinary heritage of India at Noida's premier fine dining destination.
              Where traditional recipes meet contemporary elegance.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button
                onClick={() => scrollToSection('reservation')}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5" />
                Book Table
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="px-8 py-4 bg-white/5 backdrop-blur border border-[#D4AF37]/50 text-white font-semibold rounded-lg hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-5 h-5" />
                Explore Menu
              </button>
            </div>

            {/* Stats Preview */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-[#D4AF37] mb-1">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D4AF37] animate-bounce-slow"
        >
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </section>

      {/* Special Offers Banner */}
      <div className="bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#8B0000] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="inline-flex items-center gap-8 px-8">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Limited Time: Flat 25% OFF on your first order!
            </span>
            <span className="text-[#D4AF37] font-bold">|</span>
            <span className="flex items-center gap-2">
              <GiftIcon className="w-4 h-4" /> Weekend Buffet: Rs. 549/person - Book Now!
            </span>
            <span className="text-[#D4AF37] font-bold">|</span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" /> Complimentary Dessert on reservations of 4+ guests
            </span>
            <span className="text-[#D4AF37] font-bold">|</span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Anniversary Special: 15% OFF for couples
            </span>
          </span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B0000]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
                  alt="Our Kitchen"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 lg:right-6 bg-black/90 backdrop-blur-lg p-6 rounded-xl border border-[#D4AF37]/30 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center">
                    <Award className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#D4AF37]">15+</div>
                    <div className="text-sm text-gray-400">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#D4AF37] rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#D4AF37] rounded-br-2xl"></div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
                <ChefHat className="w-4 h-4" />
                <span>Our Story</span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bringing India's
                <span className="text-[#D4AF37] block">Culinary Heritage to Life</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Spice Heaven brings together the rich culinary heritage of India with modern dining elegance.
                Our chefs carefully craft every dish using traditional recipes, premium ingredients, and
                authentic spices sourced directly from the heart of India.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Founded in 2011 by Chef Rajesh Sharma, Spice Heaven has become Noida's most beloved destination
                for authentic North Indian and Mughlai cuisine. Our kitchen is a place where age-old recipes
                are honored while embracing contemporary techniques to create unforgettable dining experiences.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {whyChooseUs.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('menu')}
                className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-4 transition-all duration-300"
              >
                <span>Explore Our Menu</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#D4AF37]">{stat.icon}</div>
                  <div className="text-4xl font-bold text-white">
                    <Counter end={stat.value} duration={2} />{stat.suffix}
                  </div>
                </div>
                <p className="text-gray-400">{stat.label}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special of the Day Section */}
      <section id="offers" className="py-20 lg:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B0000]/10 rounded-full text-[#D4AF37] text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Today's Special</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Special of the <span className="text-[#D4AF37]">Day</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every day brings a new culinary celebration with exclusive offers on our most loved dishes
            </p>
          </div>

          {/* Special Cards Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSpecialDay * 100}%)` }}
              >
                {dailySpecials.map((special, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="relative bg-gradient-to-br from-white/5 to-black/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 group max-w-4xl mx-auto">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto">
                          <img
                            src={special.image}
                            alt={special.dish}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent md:bg-gradient-to-t md:from-black/60"></div>

                          {/* Day Badge */}
                          <div className="absolute top-4 left-4 px-4 py-2 bg-[#D4AF37] text-black font-bold rounded-lg">
                            {special.day}
                          </div>

                          {/* Discount Badge */}
                          <div className="absolute top-4 right-4 w-16 h-16 bg-[#8B0000] rounded-full flex flex-col items-center justify-center text-white font-bold shadow-lg">
                            <span className="text-lg">{special.discount}%</span>
                            <span className="text-[10px] -mt-1">OFF</span>
                          </div>
                        </div>

                        <div className="p-8 flex flex-col justify-center">
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {special.dish}
                          </h3>
                          <p className="text-gray-400 mb-6 leading-relaxed">{special.description}</p>

                          <div className="flex items-center gap-4 mb-6">
                            <div className="text-3xl font-bold text-[#D4AF37]">&#8377;{special.price}</div>
                            <div className="text-xl text-gray-500 line-through">&#8377;{special.originalPrice}</div>
                            <div className="px-3 py-1 bg-[#8B0000]/20 text-[#D4AF37] text-sm rounded-full">
                              Save &#8377;{special.originalPrice - special.price}
                            </div>
                          </div>

                          <button
                            onClick={() => scrollToSection('reservation')}
                            className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 w-fit"
                          >
                            Book Now & Claim Offer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {dailySpecials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpecialDay(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSpecialDay === index
                      ? 'w-8 bg-[#D4AF37]'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 lg:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#111] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Our Menu</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Authentic <span className="text-[#D4AF37]">Flavors</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our carefully curated menu featuring traditional recipes and contemporary creations
            </p>
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(menuCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveMenuCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeMenuCategory === key
                    ? 'bg-[#D4AF37] text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-[#D4AF37]'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {menuCategories[activeMenuCategory as keyof typeof menuCategories].items.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300 flex justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        item.isVeg
                          ? 'bg-green-500/20 text-green-400 border border-green-400'
                          : 'bg-red-500/20 text-red-400 border border-red-400'
                      }`}
                    >
                      {item.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#D4AF37]">&#8377;{item.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Menu CTA */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur border border-[#D4AF37]/50 text-white font-semibold rounded-lg hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300">
              <UtensilsCrossed className="w-5 h-5" />
              <span>Download Full Menu (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Chef's Recommendation */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D4AF37] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#D4AF37] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
              <Crown className="w-4 h-4" />
              <span>Signature Dishes</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chef's <span className="text-[#D4AF37]">Recommendations</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Handpicked masterpieces from our chef, prepared with the finest ingredients and generations of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {chefRecommendations.map((dish, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-black/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-black/80 backdrop-blur rounded-full">
                    <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="text-white font-semibold">{dish.rating}</span>
                  </div>

                  {/* Chef Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#D4AF37]/90 backdrop-blur rounded-full">
                    <ChefHat className="w-4 h-4 text-black" />
                    <span className="text-black font-semibold text-sm">Chef's Special</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {dish.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{dish.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#D4AF37]">&#8377;{dish.price}</div>
                    <button
                      onClick={() => scrollToSection('reservation')}
                      className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Visual Journey</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Food <span className="text-[#D4AF37]">Gallery</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A glimpse into our world of culinary artistry and elegant dining spaces
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl group ${image.span}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white font-semibold">{image.alt}</p>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                        <Heart className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 lg:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our <span className="text-[#D4AF37]">Guests Say</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our valued guests
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed italic">
                  "{review.review}"
                </p>

                {/* Verified Badge */}
                <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-500">Verified Customer</span>
                </div>
              </div>
            ))}
          </div>

          {/* Average Rating */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur rounded-2xl border border-[#D4AF37]/30">
              <div className="text-5xl font-bold text-[#D4AF37]">4.9</div>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">Based on 2,847 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/11145972/pexels-photo-11145972.jpeg"
            alt="Restaurant Interior"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
                <Calendar className="w-4 h-4" />
                <span>Reserve Your Table</span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Book Your
                <span className="text-[#D4AF37] block">Dining Experience</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Reserve your perfect table for an unforgettable dining experience. Whether it's a romantic dinner,
                family celebration, or business meeting, we ensure every moment is special.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call us directly</p>
                    <a href="tel:+919876543210" className="text-white font-semibold hover:text-[#D4AF37] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email reservations</p>
                    <a href="mailto:reservations@spiceheaven.in" className="text-white font-semibold hover:text-[#D4AF37] transition-colors">
                      reservations@spiceheaven.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Opening hours</p>
                    <p className="text-white font-semibold">Mon-Fri: 11AM - 11PM | Sat-Sun: 10AM - 12AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <ReservationForm
              showSuccessModal={showSuccessModal}
              setShowSuccessModal={setShowSuccessModal}
            />
          </div>
        </div>
      </section>

      {/* Events & Catering */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
              <Users className="w-4 h-4" />
              <span>Celebrate With Us</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Events & <span className="text-[#D4AF37]">Catering</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we create memorable experiences for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-[#D4AF37]/90 flex items-center justify-center">
                    {event.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                  <button className="mt-4 text-[#D4AF37] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Enquire Now <span>&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
              <Award className="w-4 h-4" />
              <span>Our Promise</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose <span className="text-[#D4AF37]">Spice Heaven</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>FAQs</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked <span className="text-[#D4AF37]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 ${
                      faqOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faqOpen === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0164208783883!2d77.31835!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c85ae0!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Spice Heaven Location"
        ></iframe>
        <div className="absolute top-4 left-4 p-4 bg-black/90 backdrop-blur rounded-xl border border-[#D4AF37]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="font-semibold text-white">Spice Heaven</p>
              <p className="text-sm text-gray-400">Sector 18, Noida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-6">
                <Phone className="w-4 h-4" />
                <span>Get in Touch</span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Visit Us at <span className="text-[#D4AF37]">Spice Heaven</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We'd love to hear from you. Whether it's a reservation inquiry, feedback, or just a friendly hello,
                reach out to us anytime.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-400">Spice Heaven, Sector 18</p>
                    <p className="text-gray-400">Noida, Uttar Pradesh, India - 201301</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:reservations@spiceheaven.in" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                      reservations@spiceheaven.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Opening Hours</h4>
                    <p className="text-gray-400">Mon - Fri: 11:00 AM - 11:00 PM</p>
                    <p className="text-gray-400">Sat - Sun: 10:00 AM - 12:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400 mb-6">
                Get updates on special offers, new dishes, and exclusive events delivered to your inbox.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Subscribe Now
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Spice Heaven
                  </h3>
                  <p className="text-xs text-gray-500">Fine Indian Dining</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Authentic Indian flavors crafted with passion. Experience the royal taste of India in the heart of Noida.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-semibold text-white mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>11AM - 11PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10AM - 12AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>10AM - 12AM</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sector 18, Noida, UP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <a href="tel:+919876543210" className="hover:text-[#D4AF37] transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <a href="mailto:reservations@spiceheaven.in" className="hover:text-[#D4AF37] transition-colors">
                    reservations@spiceheaven.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2026 Spice Heaven. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-gray-500 hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 w-12 h-12 bg-[#D4AF37] text-black rounded-full shadow-lg shadow-[#D4AF37]/30 flex items-center justify-center hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:shadow-xl transition-all duration-300 z-40 animate-bounce-slow"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Reservation Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-[#111] rounded-2xl border border-[#D4AF37]/30 p-8 max-w-md w-full text-center animate-fade-in-up">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center">
              <Award className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Reservation Confirmed!
            </h3>
            <p className="text-gray-400 mb-6">
              Your table reservation request has been received successfully. We will send you a confirmation shortly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .font-display {
          font-family: 'Playfair Display', serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

// Counter Component for Animated Stats
function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const increment = end / (duration * 60);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 1000 / 60);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

// Reservation Form Component
function ReservationForm({
  showSuccessModal,
  setShowSuccessModal,
}: {
  showSuccessModal: boolean;
  setShowSuccessModal: (show: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    specialRequests: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid Indian phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccessModal(true);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      guests: '2',
      date: '',
      time: '',
      specialRequests: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-[#D4AF37]/30 p-8">
      <h3 className="text-2xl font-display font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
        Make a Reservation
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
              errors.fullName ? 'border-red-500' : 'border-gray-700 focus:border-[#D4AF37]'
            }`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-700 focus:border-[#D4AF37]'
              }`}
              placeholder="email@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                errors.phone ? 'border-red-500' : 'border-gray-700 focus:border-[#D4AF37]'
              }`}
              placeholder="9876543210"
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Number of Guests *</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
              <option key={num} value={num} className="bg-black">
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                errors.date ? 'border-red-500' : 'border-gray-700 focus:border-[#D4AF37]'
              }`}
            />
            {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Time *</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none transition-colors ${
                errors.time ? 'border-red-500' : 'border-gray-700 focus:border-[#D4AF37]'
              }`}
            >
              <option value="" className="bg-black">Select Time</option>
              {['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((t) => (
                <option key={t} value={t} className="bg-black">{t}</option>
              ))}
            </select>
            {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
            placeholder="Any dietary requirements, special occasions..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              <span>Confirm Reservation</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// Custom Icons
function CakeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 21v-8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 13v8" />
      <path d="M12 3a2 2 0 0 0-2 2v2.3L12 8l2-.7V5a2 2 0 0 0-2-2Z" />
      <path d="M4 21h16" />
      <path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

export default App;
