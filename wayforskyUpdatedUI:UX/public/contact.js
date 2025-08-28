// Mobile menu toggle function
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu")
    const hamburgerIcon = document.getElementById("hamburgerIcon")
    const closeIcon = document.getElementById("closeIcon")
  
    menu.classList.toggle("open")
  
    if (menu.classList.contains("open")) {
      hamburgerIcon.style.transform = "scale(0)"
      setTimeout(() => {
        hamburgerIcon.style.display = "none"
        closeIcon.style.display = "block"
        closeIcon.style.transform = "scale(0)"
        setTimeout(() => {
          closeIcon.style.transform = "scale(1)"
        }, 50)
      }, 150)
    } else {
      closeIcon.style.transform = "scale(0)"
      setTimeout(() => {
        closeIcon.style.display = "none"
        hamburgerIcon.style.display = "block"
        hamburgerIcon.style.transform = "scale(0)"
        setTimeout(() => {
          hamburgerIcon.style.transform = "scale(1)"
        }, 50)
      }, 150)
    }
  }
  
  // Active state management function
  function setActive(clickedLink) {
    // Remove active class from all nav links
    document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
      link.classList.remove("active")
    })
  
    // Add active class to clicked link
    clickedLink.classList.add("active")
  
    // Close mobile menu if open
    const menu = document.getElementById("mobileMenu")
    const hamburgerIcon = document.getElementById("hamburgerIcon")
    const closeIcon = document.getElementById("closeIcon")
  
    menu.classList.remove("open")
    hamburgerIcon.style.display = "block"
    closeIcon.style.display = "none"
  }
  
  // Mobile dropdown functionality
  function toggleMobileDropdown(trigger) {
    const dropdownId = "mobile-" + trigger.dataset.dropdown
    const dropdown = document.getElementById(dropdownId)
    const arrow = trigger.querySelector(".mobile-dropdown-arrow")
  
    // Close all other dropdowns
    document.querySelectorAll(".mobile-dropdown-menu").forEach((menu) => {
      if (menu.id !== dropdownId) {
        menu.classList.remove("open")
      }
    })
  
    // Remove active state from all other triggers
    document.querySelectorAll(".mobile-dropdown-trigger").forEach((t) => {
      if (t !== trigger) {
        t.classList.remove("active")
      }
    })
  
    // Toggle current dropdown
    dropdown.classList.toggle("open")
    trigger.classList.toggle("active")
  }
  
  // Initialize functionality after DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Desktop navigation active state
    document.querySelectorAll(".desktop-nav .nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        // Allow navigation to proceed - don't prevent default
        // setActive(this); // Remove this to allow page navigation
      })
    })
  
    document.querySelectorAll(".mobile-nav .mobile-nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        // Allow navigation to proceed - don't prevent default
        // setActive(this); // Remove this to allow page navigation
      })
    })
  
    // Mobile menu button
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", toggleMobileMenu)
    }
  
    // Mobile dropdown event listeners
    document.querySelectorAll(".mobile-dropdown-trigger").forEach((trigger) => {
      trigger.addEventListener("click", function (e) {
        e.preventDefault()
        toggleMobileDropdown(this)
      })
    })
  
    // Close mobile menu and dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      const menu = document.getElementById("mobileMenu")
      const menuBtn = document.querySelector(".mobile-menu-btn")
      const hamburgerIcon = document.getElementById("hamburgerIcon")
      const closeIcon = document.getElementById("closeIcon")
  
      // Close mobile menu if clicking outside
      if (menu && menuBtn && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("open")
        hamburgerIcon.style.display = "block"
        closeIcon.style.display = "none"
  
        // Close all mobile dropdowns
        document.querySelectorAll(".mobile-dropdown-menu").forEach((dropdown) => {
          dropdown.classList.remove("open")
        })
        document.querySelectorAll(".mobile-dropdown-trigger").forEach((trigger) => {
          trigger.classList.remove("active")
        })
      }
  
      // Close mobile dropdowns if clicking outside dropdown area but inside mobile menu
      if (menu && menu.contains(e.target) && !e.target.closest(".mobile-dropdown-container")) {
        document.querySelectorAll(".mobile-dropdown-menu").forEach((dropdown) => {
          dropdown.classList.remove("open")
        })
        document.querySelectorAll(".mobile-dropdown-trigger").forEach((trigger) => {
          trigger.classList.remove("active")
        })
      }
    })
  })
  