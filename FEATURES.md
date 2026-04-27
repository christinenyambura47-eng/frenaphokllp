# Frenaphok Premium Website - Features

## Functional Quote System

### 1. Custom Quote Form
- **Location**: `/contact` page
- **Features**:
  - Full validation (name, email, phone, service required)
  - Service dropdown with 5 main services
  - Company name and additional details fields
  - Real-time error handling
  - Success confirmation message
  - API integration for quote processing

### 2. Quote API Backend
- **Endpoint**: `/api/quote` (POST)
- **Functionality**:
  - Accepts form submissions
  - Validates all required fields
  - Generates automated quote template
  - Creates WhatsApp pre-filled message
  - Logs submissions for tracking
  - Returns success confirmation with quote details

### 3. WhatsApp Auto-Quote Feature
- **Location**: Floating button (bottom-right, all pages)
- **Functionality**:
  - One-click WhatsApp integration
  - Pre-populated quote request message with:
    - All service categories listed
    - Request for pricing, packages, and timelines
    - Professional formatting
  - Direct phone: 0715273453
  - Automatic message generation for instant quote requests
  - Loading state indicator

## Hero Section Images

All pages feature premium hero images with subtle overlay effects:

### Generated Hero Images:
1. **Home Page** (`/hero-home.jpg`)
   - Modern data center with servers and security infrastructure
   - Dark blue and amber professional aesthetic

2. **About Page** (`/hero-about.jpg`)
   - Professional team collaboration and expertise
   - Modern office environment

3. **Services Page** (`/hero-services.jpg`)
   - CCTV and security monitoring systems
   - Advanced technology infrastructure

4. **Contact Page** (`/hero-contact.jpg`)
   - Customer service and support focus
   - Professional consultation environment

## Premium/Luxury Design Elements

### Color Scheme:
- **Primary**: Slate 900 (Dark Navy) - Headers and dark sections
- **Secondary**: Amber 600 (Gold) - Accents and highlights
- **Background**: White with subtle slate-50 gradients
- **Text**: Slate 900 and 700 with light font weights

### Typography:
- Font weights: Light (300) for elegance
- Letter spacing: Wide (tracking-wide) for luxury feel
- Sizes: Large, readable headings with refined proportions

### Interactive Elements:
- Smooth hover transitions (300ms)
- Shadow effects that enhance on interaction
- Gradient buttons with amber color scheme
- Border effects with amber600/10-20 opacity

## Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactive elements
- Readable on all devices

## SEO Optimized
- Dynamic metadata on all pages
- Open Graph tags for social sharing
- Proper heading hierarchy
- Semantic HTML structure
- Mobile viewport configuration

## Components

### Quote Form Component (`/components/quote-form.tsx`)
- Client-side form validation
- API integration
- Premium styling with amber accents
- Loading states and error handling
- Success confirmation

### WhatsApp Button (`/components/whatsapp-button.tsx`)
- Fixed floating position
- Auto-quote message generation
- Hover effects and tooltips
- Accessible button implementation

### Header (`/components/header.tsx`)
- Top header with contact info and social links
- Main navigation with logo
- Responsive mobile menu
- Premium styling with gradients

### Footer (`/components/footer.tsx`)
- Service links
- Quick navigation
- Contact information
- Gradient dark background
- Amber accent colors

## Services & Products
- **12 Products/Services** displayed in 3-column grid
- Individual service detail pages with full information
- Feature and benefit listings
- Premium card design with hover effects

## API Routes
- `/api/quote` - Quote request processing and generation

## Build Status
✓ All pages statically generated
✓ API route ready for production
✓ Images optimized and cached
✓ Responsive design tested
✓ Mobile navigation functional
