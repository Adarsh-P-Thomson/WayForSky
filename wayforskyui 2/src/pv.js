import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ArrowRight, 
  Play, 
  Star, 
  Heart, 
  ShoppingCart, 
  Award, 
  Sparkles, 
  Quote, 
  CheckCircle, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone 
} from 'lucide-react';

// Data (remains unchanged)
const products = [
    { id: 1, name: "Midnight Elegance", price: 299, image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=800", description: "A sophisticated blend of sandalwood, vanilla, and black pepper that embodies mystery and allure.", category: "Unisex", rating: 4.9, reviews: 1247 },
    { id: 2, name: "Golden Sunset", price: 399, image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Warm notes of amber, bergamot, and rose create an unforgettable golden hour experience.", category: "Women", rating: 4.8, reviews: 892 },
    { id: 3, name: "Ocean Breeze", price: 349, image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Fresh aquatic notes with hints of sea salt and white musk for an invigorating experience.", category: "Men", rating: 4.9, reviews: 1156 },
    { id: 4, name: "Royal Oud", price: 599, image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Luxurious oud wood combined with saffron and rose for the ultimate premium experience.", category: "Luxury", rating: 5.0, reviews: 543 },
    { id: 5, name: "Cherry Blossom", price: 279, image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Delicate floral notes with cherry blossom, peony, and white tea for a gentle elegance.", category: "Women", rating: 4.7, reviews: 967 },
    { id: 6, name: "Black Diamond", price: 799, image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Our most exclusive fragrance featuring rare black truffle, leather, and aged whiskey notes.", category: "Limited Edition", rating: 5.0, reviews: 234 }
];
const categories = [
    { id: 1, name: "For Her", description: "Elegant and sophisticated fragrances crafted for the modern woman", image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=800", count: 24 },
    { id: 2, name: "For Him", description: "Bold and distinctive scents that define masculine elegance", image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800", count: 18 },
    { id: 3, name: "Unisex", description: "Timeless fragrances that transcend traditional boundaries", image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800", count: 12 },
    { id: 4, name: "Limited Edition", description: "Exclusive collections featuring rare and precious ingredients", image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800", count: 6 }
];
const testimonials = [
    { id: 1, name: "Isabella Rodriguez", location: "New York, USA", content: "The quality and longevity of these perfumes is absolutely incredible. I've never experienced such sophisticated fragrances that last all day and receive compliments everywhere I go.", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200", rating: 5 },
    { id: 2, name: "Marcus Chen", location: "London, UK", content: "LuxeScent has completely transformed my fragrance game. The attention to detail in every bottle is remarkable, and the scents are truly unique and memorable.", avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200", rating: 5 },
    { id: 3, name: "Sophia Laurent", location: "Paris, France", content: "As someone who appreciates fine fragrances, I can confidently say that LuxeScent offers some of the most exquisite and sophisticated perfumes I've ever encountered.", avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200", rating: 5 }
];

// CSS Styles Component
const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    :root {
      --color-primary: #facc15; /* yellow-400 */
      --color-primary-dark: #eab308; /* yellow-500 */
      --color-primary-light: #fde047; /* yellow-300 */
      --color-text-light: #d1d5db; /* gray-300 */
      --color-text-medium: #9ca3af; /* gray-400 */
      --color-bg-dark: #000;
      --color-bg-medium: #111827; /* gray-900 */
      --color-bg-light: #1f2937; /* gray-800 */
      --color-border: #374151; /* gray-700 */
      --color-white: #fff;
      --color-black: #000;
      --color-green: #4ade80; /* green-400 */
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--color-bg-dark);
      color: var(--color-white);
      overflow-x: hidden;
    }

    .container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    @media (min-width: 640px) {
      .container { max-width: 640px; }
    }
    @media (min-width: 768px) {
      .container { max-width: 768px; }
    }
    @media (min-width: 1024px) {
      .container { max-width: 1024px; }
    }
    @media (min-width: 1280px) {
      .container { max-width: 1280px; }
    }
    
    /* Animations */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      50% { opacity: 0.5; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
      50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
    }
    .animate-fadeInUp {
      animation: fadeInUp 1s ease-out;
      opacity: 0;
      animation-fill-mode: forwards;
    }
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .animate-bounce {
      animation: bounce 1s infinite;
    }
    
    /* Header */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      transition: all 0.5s ease;
    }
    .header.scrolled {
      background-color: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--color-border);
    }
    .header-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.025em;
    }
    .logo .logo-primary { color: var(--color-white); }
    .logo .logo-secondary { color: var(--color-primary); }
    .nav-links-desktop { display: none; }
    @media (min-width: 768px) {
      .nav-links-desktop {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
    }
    .nav-link {
      color: var(--color-text-light);
      transition: color 0.3s ease;
    }
    .nav-link:hover { color: var(--color-white); }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .header-icon {
      padding: 0.5rem;
      color: var(--color-text-light);
      transition: color 0.3s ease;
      background: none;
      border: none;
      cursor: pointer;
    }
    .header-icon:hover { color: var(--color-white); }
    .cart-button { position: relative; }
    .cart-count {
      position: absolute;
      top: -0.25rem;
      right: -0.25rem;
      background-color: var(--color-primary);
      color: var(--color-black);
      font-size: 0.75rem;
      border-radius: 9999px;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .mobile-menu-button { display: block; }
    @media (min-width: 768px) { .mobile-menu-button { display: none; } }
    .nav-links-mobile {
      display: none;
      margin-top: 1rem;
      padding-bottom: 1rem;
      border-top: 1px solid var(--color-border);
    }
    .nav-links-mobile.open {
      display: block;
    }
    .nav-links-mobile-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 1rem;
    }

    /* Hero */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .hero-bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7));
    }
    .hero-blobs { position: absolute; inset: 0; }
    .hero-blob1 { position: absolute; top: 25%; left: 25%; width: 24rem; height: 24rem; background-color: rgba(250, 204, 21, 0.05); border-radius: 9999px; filter: blur(48px); }
    .hero-blob2 { position: absolute; bottom: 25%; right: 25%; width: 16rem; height: 16rem; background-color: rgba(255, 255, 255, 0.05); border-radius: 9999px; filter: blur(32px); animation-delay: 1s; }
    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      max-width: 80rem; /* max-w-6xl */
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .hero-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: rgba(250, 204, 21, 0.2);
      border: 1px solid rgba(250, 204, 21, 0.3);
      border-radius: 9999px;
      color: var(--color-primary);
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      letter-spacing: -0.025em;
    }
    .hero-title .hero-title-primary { display: block; color: var(--color-white); }
    .hero-title .hero-title-secondary { display: block; color: var(--color-primary); }
    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--color-text-light);
      margin-bottom: 3rem;
      max-width: 48rem; /* max-w-3xl */
      margin-left: auto;
      margin-right: auto;
      line-height: 1.625;
    }
    .hero-actions {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 640px) {
      .hero-actions { flex-direction: row; }
    }
    .btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      font-weight: 600;
      border-radius: 9999px;
      transition: all 0.5s ease;
      cursor: pointer;
      border: none;
    }
    .btn-primary {
      background-color: var(--color-primary);
      color: var(--color-black);
    }
    .btn-primary:hover {
      background-color: var(--color-primary-light);
      transform: scale(1.05);
      box-shadow: 0 10px 25px -5px rgba(250, 204, 21, 0.25), 0 8px 10px -6px rgba(250, 204, 21, 0.25);
    }
    .btn-primary .btn-icon { transition: transform 0.3s ease; }
    .btn-primary:hover .btn-icon { transform: translateX(4px); }
    .btn-secondary {
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: var(--color-white);
      background-color: transparent;
    }
    .btn-secondary:hover {
      border-color: var(--color-white);
      background-color: rgba(255, 255, 255, 0.1);
    }
    .btn-secondary .btn-icon { transition: transform 0.3s ease; }
    .btn-secondary:hover .btn-icon { transform: scale(1.1); }
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .scroll-indicator-mouse {
      width: 1.5rem;
      height: 2.5rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 9999px;
      display: flex;
      justify-content: center;
    }
    .scroll-indicator-wheel {
      width: 0.25rem;
      height: 0.75rem;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 9999px;
      margin-top: 0.5rem;
    }
     @media (min-width: 768px) {
      .hero-title { font-size: 4.5rem; }
      .hero-subtitle { font-size: 1.5rem; }
    }
    @media (min-width: 1024px) {
      .hero-title { font-size: 5rem; }
    }
    
    /* Section Base */
    .section {
      min-height: 100vh;
      padding: 5rem 0;
    }
    .section-products { background: linear-gradient(to bottom, var(--color-bg-dark), var(--color-bg-medium)); }
    .section-story { background: linear-gradient(to bottom, var(--color-bg-medium), var(--color-bg-dark)); display: flex; align-items: center; }
    .section-categories { background: var(--color-bg-dark); display: flex; align-items: center; }
    .section-testimonials { background: linear-gradient(to bottom, var(--color-bg-dark), var(--color-bg-medium)); display: flex; align-items: center; }
    .section-newsletter { background: linear-gradient(to bottom, var(--color-bg-medium), var(--color-bg-dark)); display: flex; align-items: center; }
    
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    .section-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--color-white);
    }
    .section-title-highlight {
      display: block;
      color: var(--color-primary);
    }
    .section-subtitle {
      font-size: 1.25rem;
      color: var(--color-text-medium);
      max-width: 42rem; /* max-w-2xl */
      margin: 0 auto;
      line-height: 1.625;
    }
    @media (min-width: 768px) {
      .section-title { font-size: 3.75rem; }
    }
    
    /* Featured Products */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    @media (min-width: 768px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }
    
    .product-card {
      position: relative;
      background-color: rgba(31, 41, 55, 0.5); /* gray-800/50 */
      backdrop-filter: blur(4px);
      border-radius: 1rem;
      overflow: hidden;
      border: 1px solid rgba(55, 65, 81, 0.5); /* gray-700/50 */
      transition: all 0.7s ease;
      transform: translateY(0);
    }
    .product-card:hover {
      border-color: rgba(250, 204, 21, 0.5);
      transform: translateY(-0.5rem);
    }
    .product-image-wrapper {
      position: relative;
      height: 20rem;
      overflow: hidden;
    }
    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s ease;
    }
    .product-card:hover .product-image { transform: scale(1.1); }
    .product-image-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    .product-card:hover .product-image-overlay { opacity: 1; }
    
    .product-actions {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      transition: all 0.5s ease;
      opacity: 0;
      transform: translateX(1rem);
    }
    .product-card:hover .product-actions { opacity: 1; transform: translateX(0); }
    
    .product-action-btn {
      width: 2.5rem;
      height: 2.5rem;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-white);
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }
    .product-action-btn:hover {
      background-color: var(--color-primary);
      color: var(--color-black);
    }
    
    .product-price-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      padding: 0.25rem 0.75rem;
      background-color: var(--color-primary);
      color: var(--color-black);
      font-size: 0.875rem;
      font-weight: 600;
      border-radius: 9999px;
    }
    .product-content { padding: 1.5rem; }
    .product-rating {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .product-stars { display: flex; color: var(--color-primary); }
    .product-review-count { color: var(--color-text-medium); font-size: 0.875rem; margin-left: 0.5rem; }
    .product-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-white);
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }
    .product-card:hover .product-name { color: var(--color-primary); }
    .product-description {
      color: var(--color-text-medium);
      font-size: 0.875rem;
      margin-bottom: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .product-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .product-price { font-size: 1.5rem; font-weight: 700; color: var(--color-white); }
    .btn-add-to-cart {
      padding: 0.5rem 1.5rem;
      background-image: linear-gradient(to right, var(--color-primary), var(--color-primary-dark));
      color: var(--color-black);
      font-weight: 600;
      border-radius: 9999px;
      transition: all 0.3s ease;
      transform: scale(1);
      border: none;
      cursor: pointer;
    }
    .btn-add-to-cart:hover {
      box-shadow: 0 4px 15px -3px rgba(250, 204, 21, 0.25);
      transform: scale(1.05);
    }
    
    .view-all-btn-wrapper { text-align: center; margin-top: 4rem; }
    .btn-view-all {
      padding: 1rem 2rem;
      border: 2px solid var(--color-primary);
      color: var(--color-primary);
      font-weight: 600;
      border-radius: 9999px;
      background-color: transparent;
      transition: all 0.5s ease;
      transform: scale(1);
      cursor: pointer;
    }
    .btn-view-all:hover {
      background-color: var(--color-primary);
      color: var(--color-black);
      transform: scale(1.05);
    }
    
    /* Brand Story */
    .story-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 4rem;
      align-items: center;
    }
    @media (min-width: 1024px) {
      .story-grid { grid-template-columns: repeat(2, 1fr); }
    }
    .story-content { order: 2; }
    @media (min-width: 1024px) { .story-content { order: 1; } }
    .story-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: rgba(250, 204, 21, 0.2);
      border: 1px solid rgba(250, 204, 21, 0.3);
      border-radius: 9999px;
      color: var(--color-primary);
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }
    .story-title {
      font-size: 3rem;
      font-weight: 700;
      color: var(--color-white);
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
    .story-title-highlight { display: block; color: var(--color-primary); }
    @media (min-width: 768px) { .story-title { font-size: 3.75rem; } }
    
    .story-description {
      font-size: 1.25rem;
      color: var(--color-text-light);
      margin-bottom: 2rem;
      line-height: 1.625;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    @media (min-width: 640px) { .features-grid { grid-template-columns: repeat(3, 1fr); } }
    
    .feature-card {
      text-align: center;
      padding: 1.5rem;
      background-color: rgba(31, 41, 55, 0.3); /* gray-800/30 */
      border-radius: 0.75rem;
      border: 1px solid rgba(55, 65, 81, 0.5);
    }
    .feature-icon {
      width: 2rem;
      height: 2rem;
      color: var(--color-primary);
      margin: 0 auto 0.75rem;
    }
    .feature-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-white);
      margin-bottom: 0.5rem;
    }
    .feature-description {
      font-size: 0.875rem;
      color: var(--color-text-medium);
    }
    
    .btn-learn-more {
      padding: 1rem 2rem;
      background-image: linear-gradient(to right, var(--color-primary), var(--color-primary-dark));
      color: var(--color-black);
      font-weight: 600;
      border-radius: 9999px;
      transition: all 0.3s ease;
      transform: scale(1);
      border: none;
      cursor: pointer;
    }
    .btn-learn-more:hover {
      box-shadow: 0 4px 15px -3px rgba(250, 204, 21, 0.25);
      transform: scale(1.05);
    }
    
    .story-image-wrapper {
      position: relative;
      order: 1;
    }
    @media (min-width: 1024px) { .story-image-wrapper { order: 2; } }
    .story-image {
      width: 100%;
      height: 24rem;
      object-fit: cover;
      border-radius: 1rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    @media (min-width: 1024px) { .story-image { height: 31.25rem; } }
    .story-image-overlay {
      position: absolute;
      inset: 0;
      background-image: linear-gradient(to top right, rgba(250, 204, 21, 0.2), transparent);
      border-radius: 1rem;
    }
    .story-blob1 {
      position: absolute;
      top: -1.5rem;
      right: -1.5rem;
      width: 6rem;
      height: 6rem;
      background-color: rgba(250, 204, 21, 0.2);
      border-radius: 9999px;
      filter: blur(24px);
    }
    .story-blob2 {
      position: absolute;
      bottom: -1.5rem;
      left: -1.5rem;
      width: 8rem;
      height: 8rem;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 9999px;
      filter: blur(24px);
      animation-delay: 0.5s;
    }
    
    /* Product Categories */
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
    }
    @media (min-width: 768px) { .categories-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .categories-grid { grid-template-columns: repeat(4, 1fr); } }

    .category-card {
      position: relative;
      height: 20rem;
      border-radius: 1rem;
      overflow: hidden;
      cursor: pointer;
      transform: translateY(0);
      transition: all 0.7s ease;
    }
    .category-card:hover {
      transform: translateY(-1rem);
      box-shadow: 0 25px 50px -12px rgba(250, 204, 21, 0.1);
    }
    .category-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.7s ease;
    }
    .category-card:hover .category-bg { transform: scale(1.1); }
    .category-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, black, rgba(0,0,0,0.5), transparent);
      transition: all 0.5s ease;
    }
    .category-card:hover .category-overlay { background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); }
    .category-content {
      position: absolute;
      inset: 0;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .category-content-inner {
      transform: translateY(0.5rem);
      transition: all 0.5s ease;
    }
    .category-card:hover .category-content-inner { transform: translateY(0); }
    .category-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background-color: rgba(250, 204, 21, 0.2);
      border: 1px solid rgba(250, 204, 21, 0.3);
      border-radius: 9999px;
      color: var(--color-primary);
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 0.75rem;
    }
    .category-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-white);
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }
    .category-card:hover .category-name { color: var(--color-primary); }
    .category-description {
      color: var(--color-text-light);
      font-size: 0.875rem;
      opacity: 0;
      transition: all 0.5s ease 0.1s;
    }
    .category-card:hover .category-description { opacity: 1; }
    .category-border {
      position: absolute;
      inset: 0;
      border: 2px solid transparent;
      border-radius: 1rem;
      transition: all 0.5s ease;
    }
    .category-card:hover .category-border { border-color: rgba(250, 204, 21, 0.5); }
    
    /* Testimonials */
    .testimonial-wrapper {
      max-width: 56rem; /* max-w-4xl */
      margin: 0 auto 4rem;
    }
    .testimonial-card {
      position: relative;
      background-color: rgba(31, 41, 55, 0.3);
      backdrop-filter: blur(4px);
      border-radius: 1.5rem;
      padding: 2rem;
      border: 1px solid rgba(55, 65, 81, 0.5);
    }
    @media (min-width: 768px) { .testimonial-card { padding: 3rem; } }
    .testimonial-quote-icon {
      width: 4rem;
      height: 4rem;
      color: rgba(250, 204, 21, 0.3);
      margin-bottom: 1.5rem;
    }
    .testimonial-content {
      font-size: 1.5rem;
      color: var(--color-white);
      font-weight: 300;
      line-height: 1.625;
      margin-bottom: 2rem;
    }
     @media (min-width: 768px) { .testimonial-content { font-size: 1.875rem; } }
    .testimonial-author {
      display: flex;
      align-items: center;
    }
    .author-avatar {
      width: 4rem;
      height: 4rem;
      border-radius: 9999px;
      object-fit: cover;
      margin-right: 1rem;
      border: 2px solid rgba(250, 204, 21, 0.5);
    }
    .author-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-white);
    }
    .author-location { color: var(--color-text-medium); }
    .author-rating { display: flex; color: var(--color-primary); margin-top: 0.25rem; }
    
    .testimonial-dots {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
    }
    .dot {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 9999px;
      transition: all 0.3s ease;
      background-color: #4b5563; /* gray-600 */
      border: none;
      cursor: pointer;
    }
    .dot:hover { background-color: #6b7280; /* gray-500 */ }
    .dot.active {
      background-color: var(--color-primary);
      width: 2rem;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      margin-top: 5rem;
    }
    @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }
    .stat-item { text-align: center; }
    .stat-number {
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }
    @media (min-width: 768px) { .stat-number { font-size: 3rem; } }
    .stat-label { color: var(--color-text-medium); }
    
    /* Newsletter */
    .newsletter-content {
      max-width: 56rem;
      margin: 0 auto;
      text-align: center;
    }
    .newsletter-icon-wrapper {
      width: 5rem;
      height: 5rem;
      background-color: rgba(250, 204, 21, 0.2);
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 2rem;
    }
    .newsletter-icon {
      width: 2.5rem;
      height: 2.5rem;
      color: var(--color-primary);
    }
    .newsletter-form-wrapper {
      max-width: 30rem;
      margin: 0 auto;
    }
    .newsletter-form { position: relative; }
    .newsletter-input {
      width: 100%;
      padding: 1rem 1.5rem;
      background-color: rgba(31, 41, 55, 0.5);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(55, 65, 81, 0.5);
      border-radius: 9999px;
      color: var(--color-white);
      transition: all 0.3s ease;
    }
    .newsletter-input::placeholder { color: var(--color-text-medium); }
    .newsletter-input:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    .btn-subscribe {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      padding: 0.5rem 1.5rem;
      background-image: linear-gradient(to right, var(--color-primary), var(--color-primary-dark));
      color: var(--color-black);
      font-weight: 600;
      border-radius: 9999px;
      transition: all 0.3s ease;
      transform: translateY(-50%) scale(1);
      border: none;
      cursor: pointer;
    }
    .btn-subscribe:hover {
      box-shadow: 0 4px 15px -3px rgba(250, 204, 21, 0.25);
      transform: translateY(-50%) scale(1.05);
    }
    .btn-subscribe:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .subscription-success-msg {
      color: var(--color-green);
      margin-top: 1rem;
    }
    
    .subscriber-info {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      color: var(--color-text-medium);
    }
    .subscriber-avatars {
      display: flex;
      gap: -0.5rem;
    }
    .subscriber-avatar {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      border: 2px solid var(--color-bg-light);
      object-fit: cover;
    }
    .subscriber-text { font-size: 0.875rem; }
    
    /* Footer */
    .footer {
      background-color: var(--color-bg-dark);
      border-top: 1px solid var(--color-border);
    }
    .footer-content {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .footer-grid { grid-template-columns: repeat(4, 1fr); } }
    
    .footer-about { margin-bottom: 1.5rem; }
    .footer-description {
      color: var(--color-text-medium);
      margin-bottom: 1.5rem;
      line-height: 1.625;
    }
    .social-links { display: flex; gap: 1rem; }
    .social-link {
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--color-bg-light);
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-medium);
      transition: all 0.3s ease;
    }
    .social-link:hover {
      background-color: var(--color-primary);
      color: var(--color-black);
    }
    
    .footer-links-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-white);
      margin-bottom: 1.5rem;
    }
    .footer-links-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .footer-link {
      color: var(--color-text-medium);
      transition: color 0.3s ease;
    }
    .footer-link:hover { color: var(--color-primary); }
    
    .footer-contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }
    .contact-item-icon {
      width: 1.25rem;
      height: 1.25rem;
      color: var(--color-primary);
      margin-top: 0.25rem;
      flex-shrink: 0;
    }
    .contact-item-text { color: var(--color-text-medium); }
    
    .footer-bottom {
      border-top: 1px solid var(--color-border);
      margin-top: 3rem;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    @media (min-width: 768px) { .footer-bottom { flex-direction: row; } }
    .copyright {
      color: var(--color-text-medium);
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    @media (min-width: 768px) { .copyright { margin-bottom: 0; } }
    .footer-legal-links { display: flex; gap: 1.5rem; font-size: 0.875rem; }
  `}</style>
);


// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="header-nav">
          <div className="logo">
            <span className="logo-primary">LUXE</span>
            <span className="logo-secondary">SCENT</span>
          </div>

          <div className="nav-links-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="header-actions">
            <button className="header-icon">
              <Search size={20} />
            </button>
            <button className="header-icon">
              <User size={20} />
            </button>
            <button className="header-icon cart-button">
              <ShoppingBag size={20} />
              <span className="cart-count">0</span>
            </button>
            
            <button 
              className="header-icon mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        <div className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          {isMobileMenuOpen && (
            <div className="nav-links-mobile-list">
              <a href="#home" className="nav-link">Home</a>
              <a href="#products" className="nav-link">Products</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div 
        className="hero-bg"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      />
      
      <div className="hero-blobs">
        <div className="hero-blob1 animate-pulse"></div>
        <div className="hero-blob2 animate-pulse"></div>
      </div>

      <div className="hero-content">
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <span className="hero-badge">
            Premium Collection 2025
          </span>
        </div>
        
        <h1 className="hero-title animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <span className="hero-title-primary">Luxury</span>
          <span className="hero-title-secondary">Redefined</span>
        </h1>
        
        <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          Discover our exclusive collection of handcrafted perfumes, where each scent tells a story of elegance and sophistication.
        </p>
        
        <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <button className="btn btn-primary">
            <span>Explore Collection</span>
            <ArrowRight size={20} className="btn-icon" />
          </button>
          
          <button className="btn btn-secondary">
            <Play size={20} className="btn-icon" />
            <span>Watch Story</span>
          </button>
        </div>
      </div>

      <div className="scroll-indicator animate-fadeInUp" style={{ animationDelay: '1s' }}>
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-wheel animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

// Featured Products Component
const FeaturedProducts = () => {
  return (
    <section id="products" className="section section-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured
            <span className="section-title-highlight">Collection</span>
          </h2>
          <p className="section-subtitle">
            Handpicked selections from our master perfumers, each bottle crafted with the finest ingredients.
          </p>
        </div>

        <div className="products-grid">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-image-overlay"></div>
                
                <div className="product-actions">
                  <button className="product-action-btn"><Heart size={16} /></button>
                  <button className="product-action-btn"><ShoppingCart size={16} /></button>
                </div>

                <div className="product-price-badge">${product.price}</div>
              </div>

              <div className="product-content">
                <div className="product-rating">
                  <div className="product-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="product-review-count">({product.rating})</span>
                </div>
                
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button className="btn-add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-btn-wrapper">
          <button className="btn-view-all">View All Products</button>
        </div>
      </div>
    </section>
  );
};

// Brand Story Component
const BrandStory = () => {
  return (
    <section id="about" className="section section-story">
      <div className="container">
        <div className="story-grid">
          <div className="story-content">
            <div>
              <span className="story-badge">Our Story</span>
              <h2 className="story-title">
                Crafting
                <span className="story-title-highlight">Memories</span>
              </h2>
            </div>
            
            <p className="story-description">
              For over three decades, we've been dedicated to creating exceptional fragrances that capture the essence of luxury and sophistication. Each bottle represents our commitment to artistry and excellence.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <Award className="feature-icon" />
                <h3 className="feature-title">Award Winning</h3>
                <p className="feature-description">International recognition for excellence</p>
              </div>
              <div className="feature-card">
                <Sparkles className="feature-icon" />
                <h3 className="feature-title">Premium Quality</h3>
                <p className="feature-description">Finest ingredients sourced globally</p>
              </div>
              <div className="feature-card">
                <Heart className="feature-icon" />
                <h3 className="feature-title">Handcrafted</h3>
                <p className="feature-description">Artisanally created with passion</p>
              </div>
            </div>
            
            <button className="btn-learn-more">Learn More About Us</button>
          </div>

          <div className="story-image-wrapper">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury perfume crafting"
                className="story-image"
              />
              <div className="story-image-overlay"></div>
              <div className="story-blob1 animate-pulse"></div>
              <div className="story-blob2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Categories Component
const ProductCategories = () => {
    return (
        <section className="section section-categories">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Explore Our
                        <span className="section-title-highlight">Categories</span>
                    </h2>
                    <p className="section-subtitle">
                        From fresh and floral to deep and mysterious, find the perfect scent for every moment.
                    </p>
                </div>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <div className="category-bg" style={{ backgroundImage: `url(${category.image})` }} />
                            <div className="category-overlay"></div>
                            <div className="category-content">
                                <div className="category-content-inner">
                                    <span className="category-badge">{category.count} Products</span>
                                    <h3 className="category-name">{category.name}</h3>
                                    <p className="category-description">{category.description}</p>
                                </div>
                            </div>
                            <div className="category-border"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// Testimonials Component
const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section section-testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        What Our
                        <span className="section-title-highlight">Clients Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Trusted by thousands of fragrance enthusiasts worldwide for authentic, long-lasting perfumes.
                    </p>
                </div>
                <div className="testimonial-wrapper">
                    <div className="testimonial-card">
                        <Quote className="testimonial-quote-icon" />
                        <blockquote className="testimonial-content">
                            "{testimonials[currentTestimonial].content}"
                        </blockquote>
                        <div className="testimonial-author">
                            <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="author-avatar" />
                            <div>
                                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                                <p className="author-location">{testimonials[currentTestimonial].location}</p>
                                <div className="author-rating">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                        <button key={index} onClick={() => setCurrentTestimonial(index)} className={`dot ${index === currentTestimonial ? 'active' : ''}`} />
                    ))}
                </div>
                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-number">98%</div>
                        <p className="stat-label">Customer Satisfaction</p>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">50K+</div>
                        <p className="stat-label">Happy Customers</p>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">30+</div>
                        <p className="stat-label">Awards Won</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Newsletter Component
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <section className="section section-newsletter">
            <div className="container">
                <div className="newsletter-content">
                    <div className="newsletter-icon-wrapper">
                        <Mail className="newsletter-icon" />
                    </div>
                    <h2 className="section-title">
                        Stay in the
                        <span className="section-title-highlight">Loop</span>
                    </h2>
                    <p className="section-subtitle">
                        Be the first to discover our new collections, exclusive offers, and fragrance tips from our master perfumers.
                    </p>
                    <div className="newsletter-form-wrapper">
                        <form onSubmit={handleSubmit} className="newsletter-form">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" disabled={isSubscribed} className="btn-subscribe">
                                {isSubscribed ? <CheckCircle size={20} /> : 'Subscribe'}
                            </button>
                        </form>
                    </div>
                    {isSubscribed && (
                        <p className="subscription-success-msg animate-fadeInUp">
                            Thank you for subscribing! Check your email for exclusive offers.
                        </p>
                    )}
                    <div className="subscriber-info">
                         <div className="subscriber-avatars">
                            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Customer" className="subscriber-avatar" />
                            <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Customer" className="subscriber-avatar" />
                            <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Customer" className="subscriber-avatar" />
                        </div>
                        <span className="subscriber-text">Join 10,000+ subscribers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-grid">
                    <div>
                        <div className="logo footer-about">
                            <span className="logo-primary">LUXE</span>
                            <span className="logo-secondary">SCENT</span>
                        </div>
                        <p className="footer-description">
                            Crafting luxury fragrances that capture the essence of sophistication and elegance since 1990.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={18} /></a>
                            <a href="#" className="social-link"><Instagram size={18} /></a>
                            <a href="#" className="social-link"><Twitter size={18} /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="footer-links-title">Quick Links</h3>
                        <ul className="footer-links-list">
                            {['About Us', 'Our Story', 'Collections', 'New Arrivals', 'Best Sellers'].map((link) => (
                                <li key={link}><a href="#" className="footer-link">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-links-title">Customer Care</h3>
                        <ul className="footer-links-list">
                            {['Contact Us', 'Shipping Info', 'Returns', 'Size Guide', 'FAQ'].map((link) => (
                                <li key={link}><a href="#" className="footer-link">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-links-title">Contact Info</h3>
                        <div className="footer-contact-info">
                            <div className="contact-item">
                                <MapPin className="contact-item-icon" />
                                <p className="contact-item-text">123 Luxury Avenue<br />New York, NY 10001</p>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-item-icon" />
                                <p className="contact-item-text">+1 (555) 123-4567</p>
                            </div>
                            <div className="contact-item">
                                <Mail className="contact-item-icon" />
                                <p className="contact-item-text">info@luxescent.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">© 2025 LuxeScent. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Terms of Service</a>
                        <a href="#" className="footer-link">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
const PerfumeApp = () => {
  return (
    <div>
      <Styles />
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <BrandStory />
        <ProductCategories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default PerfumeApp;
