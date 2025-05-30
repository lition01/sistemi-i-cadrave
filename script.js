configuration.const
users = [
  {
    email: "admin@beach.com",
    password: "password",
    displayName: "Admin User",
    role: "admin",
    isNewAdmin: false,
  },
  {
    email: "user@beach.com",
    password: "password",
    displayName: "Beach Employee",
    role: "user",
    isNewAdmin: false,
  },
]

// Data structure
let beachData = {
  info: {
    name: "Sunset Beach Bar",
    location: "Miami Beach, FL",
    contactPhone: "+1 (555) 123-4567",
    contactEmail: "info@sunsetbeach.com",
    description: "Beautiful beachfront location with premium amenities",
    logoUrl: null,
  },
  layout: {
    rows: 5,
    columns: 10,
    spacing: 3,
  },
  settings: {
    openingTime: "08:00",
    closingTime: "20:00",
    timeSlotDuration: 60,
    familyPrice: 10.0,
    doublePrice: 15.0,
    vipPrice: 25.0,
    standardPrice: 20.0,
    premiumPrice: 30.0,
    currency: "USD",
    operatingDays: [0, 1, 2, 3, 4, 5, 6],
    maxAdvanceBooking: 30,
    cancellationPolicy: 24,
    depositPercentage: 20,
  },
  umbrellas: [],
  reservations: [],
  umbrellaTypes: ["family", "double", "vip", "standard", "premium"],
}

// Current user and state
let currentUser = null
let currentView = "dashboard"
let isEditingLayout = false
let currentUmbrellaId = null
let currentMonth = new Date().getMonth()
let currentYear = new Date().getFullYear()
let logoFile = null
let isChangingStatus = false

// DOM Elements - Login
const loadingScreen = document.querySelector(".loading-screen")
const loginContainer = document.getElementById("login-container")
const appContainer = document.getElementById("app-container")
const loginFormElement = document.getElementById("loginFormElement")
const signupFormElement = document.getElementById("signupFormElement")
const loginForm = document.getElementById("loginForm")
const signupForm = document.getElementById("signupForm")
const loginEmail = document.getElementById("loginEmail")
const loginPassword = document.getElementById("loginPassword")
const signupEmail = document.getElementById("signupEmail")
const signupPassword = document.getElementById("signupPassword")
const fullName = document.getElementById("fullName")
const confirmPassword = document.getElementById("confirmPassword")
const showSignup = document.getElementById("showSignup")
const showLogin = document.getElementById("showLogin")
const successMessage = document.getElementById("successMessage")

// DOM Elements - Main App
const userDisplayName = document.getElementById("user-display-name")
const beachNameElement = document.getElementById("beach-name")
const logoutBtn = document.getElementById("logout-btn")
const menuToggle = document.querySelector(".menu-toggle")
const sidebar = document.querySelector(".sidebar")
const menuItems = document.querySelectorAll(".menu-item")
const umbrellaGrid = document.getElementById("umbrella-grid")
const currentDateDisplay = document.getElementById("current-date")
const statusFilter = document.getElementById("status-filter")
const saveDataBtn = document.getElementById("save-data")
const editLayoutBtn = document.getElementById("edit-layout")
const changestatusBtn = document.getElementById("change-status1")

// Status counters
const availableCount = document.getElementById("available-count")
const reservedCount = document.getElementById("reserved-count")
const occupiedCount = document.getElementById("occupied-count")
const maintenanceCount = document.getElementById("maintenance-count")

// Settings elements
const beachBarNameInput = document.getElementById("beach-bar-name")
const beachLocationInput = document.getElementById("beach-location")
const contactPhoneInput = document.getElementById("contact-phone")
const contactEmailInput = document.getElementById("contact-email")
const rowsCount = document.getElementById("rows-count")
const columnsCount = document.getElementById("columns-count")
const openingTimeInput = document.getElementById("opening-time")
const closingTimeInput = document.getElementById("closing-time")
const timeSlotInput = document.getElementById("time-slot")
const applyLayoutBtn = document.getElementById("apply-layout")
const saveSettingsBtn = document.getElementById("save-settings")
const saveBeachInfoBtn = document.getElementById("save-beach-info")

// Configuration elements
const configBeachNameInput = document.getElementById("config-beach-name")
const configBeachLocationInput = document.getElementById("config-beach-location")
const configContactPhoneInput = document.getElementById("config-contact-phone")
const configContactEmailInput = document.getElementById("config-contact-email")
const configDescriptionInput = document.getElementById("config-description")
const configRowsCount = document.getElementById("config-rows-count")
const configColumnsCount = document.getElementById("config-columns-count")
const configLayoutPreview = document.getElementById("config-layout-preview")
const configFamilyPrice = document.getElementById("config-family-price")
const configDoublePrice = document.getElementById("config-double-price")
const configVipPrice = document.getElementById("config-vip-price")
const configOpeningTime = document.getElementById("config-opening-time")
const configClosingTime = document.getElementById("config-closing-time")
const configTimeSlot = document.getElementById("config-time-slot")
const configOperatingDays = document.querySelectorAll('#configuration .days-selector input[type="checkbox"]')
const saveConfigurationBtn = document.getElementById("save-configuration")
const resetConfigurationBtn = document.getElementById("reset-configuration")

// Logo upload elements
const logoUpload = document.getElementById("logo-upload")
const logoPreview = document.getElementById("logo-preview")
const logoImage = document.getElementById("logo-image")
const removeLogo = document.getElementById("remove-logo")

// Reservations elements
const reservationsList = document.getElementById("reservations-list")
const reservationSearch = document.getElementById("reservation-search")
const reservationFilter = document.getElementById("reservation-filter")
const addReservationBtn = document.getElementById("add-reservation")
const exportExcelBtn = document.getElementById("export-excel")
const exportPdfBtn = document.getElementById("export-pdf")

// Calendar elements
const calendarMonthYear = document.getElementById("calendar-month-year")
const calendarDays = document.getElementById("calendar-days")
const prevMonthBtn = document.getElementById("prev-month")
const nextMonthBtn = document.getElementById("next-month")
const todayBtn = document.getElementById("today-btn")

// Modal elements
const umbrellaModal = document.getElementById("umbrella-modal")
const reservationModal = document.getElementById("reservation-modal")
const modalTitle = document.getElementById("modal-title")
const umbrellaStatusSelect = document.getElementById("umbrella-status-select")
const umbrellaLocation = document.getElementById("umbrella-location")
const umbrellaReservation = document.getElementById("umbrella-reservation")
const makeReservationBtn = document.getElementById("make-reservation")
const viewHistoryBtn = document.getElementById("view-history")

// Reservation form elements
const reservationForm = document.getElementById("reservation-form")
const reservationType = document.getElementById("reservation-type")
const singleReservationFields = document.getElementById("single-reservation-fields")
const subscriptionFields = document.getElementById("subscription-fields")
const reservationDate = document.getElementById("reservation-date")
const subscriptionStart = document.getElementById("subscription-start")
const subscriptionEnd = document.getElementById("subscription-end")
const reservationTimeStart = document.getElementById("reservation-time-start")
const reservationTimeEnd = document.getElementById("reservation-time-end")
const umbrellaSelect = document.getElementById("umbrella-select")
const customerName = document.getElementById("customer-name")
const customerPhone = document.getElementById("customer-phone")
const reservationNotes = document.getElementById("reservation-notes")

// Toast elements
const toast = document.getElementById("toast")
const toastMessage = document.getElementById("toast-message")
const toastIcon = document.querySelector(".toast-icon i")
const toastClose = document.querySelector(".toast-close")

// Notifications
let notifications = []
const notificationsContainer = document.querySelector('.notifications')
const notificationBadge = document.querySelector('.notification-badge')

// Initialize the application
function initApp() {
  // Show loading screen
  setTimeout(() => {
    loadingScreen.classList.add("hidden")
    checkLoginStatus()
  }, 1500)

  setupEventListeners()
  setupPasswordToggles()
  setupRoleSelectors()
  setupLogoUpload()
  initNotifications()
}

// Check if user is already logged in
function checkLoginStatus() {
  const savedUser = localStorage.getItem("beachManagerUser")

  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser)
      loginSuccess()
    } catch (error) {
      showLoginScreen()
    }
  } else {
    showLoginScreen()
  }
}

// Show login screen
function showLoginScreen() {
  loginContainer.classList.remove("hidden")
  appContainer.classList.add("hidden")
}

// Setup event listeners
function setupEventListeners() {
  // Login/Signup forms
  if (loginFormElement) {
    loginFormElement.addEventListener("submit", handleLogin)
  }
  if (signupFormElement) {
    signupFormElement.addEventListener("submit", handleSignup)
  }
  if (showSignup) {
    showSignup.addEventListener("click", switchToSignup)
  }
  if (showLogin) {
    showLogin.addEventListener("click", switchToLogin)
  }

  // Logout button
  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout)
  }

  // Menu toggle for mobile
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")
    })

    // Add close button to sidebar if it doesn't exist
    if (sidebar && !sidebar.querySelector('.close-sidebar')) {
      const closeButton = document.createElement('button');
      closeButton.className = 'close-sidebar';
      closeButton.innerHTML = '<i class="fas fa-times"></i>';
      closeButton.addEventListener('click', () => {
        sidebar.classList.remove('active');
      });
      sidebar.insertBefore(closeButton, sidebar.firstChild);
    }
  }

  // Menu navigation
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const view = item.getAttribute("data-view")
      switchView(view)
    })
  })

  // Dashboard events
  if (statusFilter) {
    statusFilter.addEventListener("change", renderDashboard)
  }
  if (editLayoutBtn) {
    editLayoutBtn.addEventListener("click", toggleLayoutEdit)
  }

  // Change status button
  if (changestatusBtn) {
    changestatusBtn.addEventListener("click", toggleStatusChange)
  }

  // Save data button
  if (saveDataBtn) {
    saveDataBtn.addEventListener("click", () => {
      saveData()
      showToast("Data saved successfully!", "success")
    })
  }

  // Settings events
  if (applyLayoutBtn) {
    applyLayoutBtn.addEventListener("click", applyLayoutChanges)
  }
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener("click", saveSettings)
  }
  if (saveBeachInfoBtn) {
    saveBeachInfoBtn.addEventListener("click", saveBeachInfo)
  }

  // Configuration events
  if (saveConfigurationBtn) {
    saveConfigurationBtn.addEventListener("click", saveConfiguration)
  }
  if (resetConfigurationBtn) {
    resetConfigurationBtn.addEventListener("click", resetConfiguration)
  }
  if (configRowsCount) {
    configRowsCount.addEventListener("input", updateLayoutPreview)
  }
  if (configColumnsCount) {
    configColumnsCount.addEventListener("input", updateLayoutPreview)
  }

  // Logo upload events
  if (logoUpload) {
    logoUpload.addEventListener("change", handleLogoUpload)
  }
  if (removeLogo) {
    removeLogo.addEventListener("click", removeLogoFile)
  }

  // Reservation events
  if (addReservationBtn) {
    addReservationBtn.addEventListener("click", showNewReservationModal)
  }
  if (reservationSearch) {
    reservationSearch.addEventListener("input", renderReservations)
  }
  if (reservationFilter) {
    reservationFilter.addEventListener("change", renderReservations)
  }
  if (exportExcelBtn) {
    exportExcelBtn.addEventListener("click", exportToExcel)
  }
  if (exportPdfBtn) {
    exportPdfBtn.addEventListener("click", exportToPDF)
  }

  // Calendar events
  if (prevMonthBtn) {
    prevMonthBtn.addEventListener("click", () => {
      currentMonth--
      if (currentMonth < 0) {
        currentMonth = 11
        currentYear--
      }
      renderCalendar()
    })
  }
  if (nextMonthBtn) {
    nextMonthBtn.addEventListener("click", () => {
      currentMonth++
      if (currentMonth > 11) {
        currentMonth = 0
        currentYear++
      }
      renderCalendar()
    })
  }
  if (todayBtn) {
    todayBtn.addEventListener("click", goToToday)
  }

  // Modal events
  document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", closeAllModals)
  })

  document.querySelectorAll(".cancel-reservation").forEach((btn) => {
    btn.addEventListener("click", closeAllModals)
  })

  if (umbrellaStatusSelect) {
    umbrellaStatusSelect.addEventListener("change", updateUmbrellaStatus)
  }
  if (makeReservationBtn) {
    makeReservationBtn.addEventListener("click", () => {
      showReservationModal(currentUmbrellaId)
    })
  }

  // Reservation form events
  if (reservationType) {
    reservationType.addEventListener("change", toggleReservationFields)
  }
  if (reservationForm) {
    reservationForm.addEventListener("submit", handleReservationSubmit)
  }

  // Toast close button
  if (toastClose) {
    toastClose.addEventListener("click", () => {
      toast.classList.remove("show")
    })
  }

  // Click outside modal to close
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeAllModals()
    }
  })

  // Receipt events
  const generateReceiptBtn = document.getElementById("generate-receipt")
  if (generateReceiptBtn) {
    generateReceiptBtn.addEventListener("click", renderReceipt)
  }

  const receiptDateInput = document.getElementById("receipt-date")
  if (receiptDateInput) {
    receiptDateInput.addEventListener("change", renderReceipt)
  }

  const receiptPeriodSelect = document.getElementById("receipt-period")
  if (receiptPeriodSelect) {
    receiptPeriodSelect.addEventListener("change", renderReceipt)
  }

  // Notifications
  if (notificationsContainer) {
    notificationsContainer.addEventListener('click', toggleNotificationsDropdown)
  }
  
  // Close notifications dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.notifications-dropdown')
    if (dropdown && !notificationsContainer.contains(e.target)) {
      dropdown.remove()
    }
  })
}

// Setup password toggles
function setupPasswordToggles() {
  const passwordToggles = document.querySelectorAll(".password-toggle")
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = toggle.parentElement.querySelector("input")
      const icon = toggle.querySelector("i")

      if (input.type === "password") {
        input.type = "text"
        icon.className = "fas fa-eye-slash"
      } else {
        input.type = "password"
        icon.className = "fas fa-eye"
      }
    })
  })
}

// Setup role selectors
function setupRoleSelectors() {
  const roleSelectors = document.querySelectorAll(".role-selector")
  roleSelectors.forEach((selector) => {
    const options = selector.querySelectorAll(".role-option")
    options.forEach((option) => {
      option.addEventListener("click", () => {
        // Remove active class from all options in this selector
        options.forEach((opt) => opt.classList.remove("active"))
        // Add active class to clicked option
        option.classList.add("active")

        // Show/hide admin key field for signup
        const adminKeyGroup = document.getElementById("adminKeyGroup")
        if (adminKeyGroup && option.getAttribute("data-role") === "admin") {
          adminKeyGroup.style.display = "block"
        } else if (adminKeyGroup) {
          adminKeyGroup.style.display = "none"
        }
      })
    })
  })
}

// Switch to signup form
function switchToSignup() {
  loginForm.classList.add("hidden")
  signupForm.classList.remove("hidden")
  successMessage.style.display = "none"
}

// Switch to login form
function switchToLogin() {
  signupForm.classList.add("hidden")
  loginForm.classList.remove("hidden")
  successMessage.style.display = "none"
}

// Handle login form submission
function handleLogin(e) {
  e.preventDefault()

  const email = loginEmail.value.trim()
  const password = loginPassword.value
  const selectedRole = document.querySelector(".login-form .role-option.active")?.getAttribute("data-role") || "user"

  // Find user
  const user = users.find((u) => u.email === email && u.password === password && u.role === selectedRole)

  if (user) {
    currentUser = {
      email: user.email,
      displayName: user.displayName,
      role: user.role,
      isNewAdmin: user.isNewAdmin,
    }

    // Save user to localStorage
    localStorage.setItem("beachManagerUser", JSON.stringify(currentUser))

    loginSuccess()
  } else {
    showToast("Invalid email, password, or role", "error")
  }
}

// Handle signup form submission
function handleSignup(e) {
  e.preventDefault()

  const name = fullName.value.trim()
  const email = signupEmail.value.trim()
  const password = signupPassword.value
  const confirmPass = confirmPassword.value
  const selectedRole = document.querySelector(".signup-form .role-option.active")?.getAttribute("data-role") || "user"
  const adminKey = document.getElementById("adminKey")?.value

  // Validate form
  if (!name || !email || !password || !confirmPass) {
    showToast("Please fill in all required fields", "error")
    return
  }

  if (password !== confirmPass) {
    showToast("Passwords do not match", "error")
    return
  }

  if (password.length < 6) {
    showToast("Password must be at least 6 characters long", "error")
    return
  }

  // Check if user already exists
  if (users.find((u) => u.email === email)) {
    showToast("User with this email already exists", "error")
    return
  }

  // Validate admin key if admin role selected
  if (selectedRole === "admin" && adminKey !== "BEACH2024") {
    showToast("Invalid manager access key", "error")
    return
  }

  // Create new user
  const newUser = {
    email,
    password,
    displayName: name,
    role: selectedRole,
    isNewAdmin: selectedRole === "admin",
  }

  users.push(newUser)

  // Show success message
  successMessage.textContent = "Account created successfully! Please sign in."
  successMessage.style.display = "block"

  // Switch to login form
  setTimeout(() => {
    switchToLogin()
    loginEmail.value = email
  }, 2000)
}

// Login success
function loginSuccess() {
  // Update user display name
  if (userDisplayName) {
    userDisplayName.textContent = currentUser.displayName
  }

  // Hide login screen and show app
  loginContainer.classList.add("hidden")
  appContainer.classList.remove("hidden")

  // Load data and initialize app
  loadData()
  updateCurrentDateDisplay()
  renderDashboard()
  loadConfigurationForm()
  populateTimeSlots()

  // Update beach name in the sidebar
  if (beachNameElement) {
    beachNameElement.textContent = beachData.info.name || "Beach Manager"
  }

  // Show welcome toast
  showToast(`Welcome back, ${currentUser.displayName}!`, "success")
  addNotification(`Welcome back, ${currentUser.displayName}! You have successfully logged in.`, "success")
}

// Handle logout
function handleLogout() {
  addNotification("You have been logged out", "info")
  
  // Clear current user
  currentUser = null

  // Remove from localStorage
  localStorage.removeItem("beachManagerUser")

  // Show login screen
  showLoginScreen()
}

// Load data from localStorage
function loadData() {
  const savedData = localStorage.getItem("beachUmbrellaData")
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData)
      beachData = { ...beachData, ...parsedData }

      // Convert date strings back to Date objects
      beachData.reservations.forEach((reservation) => {
        if (reservation.date) {
          reservation.date = new Date(reservation.date)
        }
        if (reservation.startDate) {
          reservation.startDate = new Date(reservation.startDate)
        }
        if (reservation.endDate) {
          reservation.endDate = new Date(reservation.endDate)
        }
      })
    } catch (error) {
      console.error("Error loading data:", error)
      initializeDefaultData()
    }
  } else {
    initializeDefaultData()
  }
}

// Initialize default data
function initializeDefaultData() {
  // Create default umbrellas
  beachData.umbrellas = []
  for (let row = 1; row <= beachData.layout.rows; row++) {
    for (let col = 1; col <= beachData.layout.columns; col++) {
      beachData.umbrellas.push({
        id: `umbrella-${row}-${col}`,
        number: (row - 1) * beachData.layout.columns + col,
        row: row,
        column: col,
        status: "available",
        type: "family", // Default type
      })
    }
  }

  // Add some sample reservations
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  beachData.reservations = [
    {
      id: "res-1",
      umbrellaId: "umbrella-1-1",
      customerName: "John Smith",
      customerPhone: "+1 (555) 123-4567",
      date: today,
      startTime: "10:00",
      endTime: "16:00",
      type: "single",
      notes: "Anniversary celebration",
    },
    {
      id: "res-2",
      umbrellaId: "umbrella-1-2",
      customerName: "Maria Garcia",
      customerPhone: "+1 (555) 987-6543",
      date: tomorrow,
      startTime: "09:00",
      endTime: "15:00",
      type: "single",
      notes: "Family vacation",
    },
  ]

  // Update umbrella statuses
  beachData.umbrellas[0].status = "occupied" // First umbrella
  beachData.umbrellas[1].status = "reserved" // Second umbrella

  saveData()
}

// Save data to localStorage
function saveData() {
  try {
    localStorage.setItem("beachUmbrellaData", JSON.stringify(beachData))
  } catch (error) {
    console.error("Error saving data:", error)
    showToast("Error saving data", "error")
  }
}

// Load configuration form
function loadConfigurationForm() {
  if (!configBeachNameInput) return

  // Beach info
  configBeachNameInput.value = beachData.info.name || ""
  configBeachLocationInput.value = beachData.info.location || ""
  configContactPhoneInput.value = beachData.info.contactPhone || ""
  configContactEmailInput.value = beachData.info.contactEmail || ""
  if (configDescriptionInput) {
    configDescriptionInput.value = beachData.info.description || ""
  }

  // Layout
  configRowsCount.value = beachData.layout.rows
  configColumnsCount.value = beachData.layout.columns

  // Operating hours
  configOpeningTime.value = beachData.settings.openingTime || "08:00"
  configClosingTime.value = beachData.settings.closingTime || "20:00"
  configTimeSlot.value = beachData.settings.timeSlotDuration || 60

  // Operating days
  configOperatingDays.forEach((checkbox) => {
    checkbox.checked = beachData.settings.operatingDays.includes(Number.parseInt(checkbox.value))
  })

  // Update layout preview
  updateLayoutPreview()

  // Load logo if exists
  if (beachData.info.logoUrl && logoImage && logoPreview) {
    logoImage.src = beachData.info.logoUrl
    logoPreview.style.display = "block"
  }

  // Update pricing configuration - SAFE VERSION that won't break other functionality
  updatePricingConfiguration()
}

function updatePricingConfiguration() {
  // Get or create the pricing container
  let pricingContainer = document.querySelector(".pricing-configuration-container")
  if (!pricingContainer) {
    // Find the settings card that contains pricing configuration
    const settingsCards = document.querySelectorAll(".settings-card")
    for (const card of settingsCards) {
      if (card.querySelector("h3")?.textContent.includes("Pricing Configuration")) {
        pricingContainer = card.querySelector(".pricing-fields") || card
        break
      }
    }
  }

  if (pricingContainer) {
    // Create a temporary container to hold our new HTML
    const tempContainer = document.createElement("div")

    // Generate the pricing inputs HTML
    tempContainer.innerHTML = beachData.umbrellaTypes
      .map((type) => {
        const typeInfo = getTypeInfo(type)
        const price = beachData.settings[`${type}Price`] || 0
        const count = beachData.umbrellas.filter((u) => u.type === type).length

        return `
        <div class="pricing-group" data-type="${type}">
          <div class="form-group">
            <label for="config-${type}-price">
              <i class="${typeInfo.icon}"></i>
              ${typeInfo.label} Umbrella Price 
              <span class="type-count">(${count} umbrellas)</span>:
            </label>
            <div class="price-input-container">
              <span class="currency-symbol">${beachData.settings.currency || "$"}</span>
              <input type="number" id="config-${type}-price" 
                     value="${price.toFixed(2)}" min="0" step="0.01">
            </div>
          </div>
        </div>
      `
      })
      .join("")

    // Safely replace only the pricing groups while preserving other elements
    const existingGroups = pricingContainer.querySelectorAll(".pricing-group")
    if (existingGroups.length > 0) {
      // Replace existing groups one by one to minimize DOM disruption
      existingGroups.forEach((group, index) => {
        const newGroup = tempContainer.children[index]
        if (newGroup) {
          group.replaceWith(newGroup)
        }
      })

      // Add any new groups that didn't exist before
      for (let i = existingGroups.length; i < tempContainer.children.length; i++) {
        pricingContainer.appendChild(tempContainer.children[i].cloneNode(true))
      }
    } else {
      // No existing groups, just append all new ones
      while (tempContainer.firstChild) {
        pricingContainer.appendChild(tempContainer.firstChild)
      }
    }
  }

  // Reinitialize any time-related functionality if needed
  populateTimeSlots()
}

// Update configuration pricing based on umbrella types
function updateConfigurationPricing() {
  const typeCounts = getUmbrellaTypeCounts()

  // Show/hide pricing inputs based on what types are in use
  const familyGroup = document.querySelector('.pricing-group[data-type="family"]')
  const doubleGroup = document.querySelector('.pricing-group[data-type="double"]')
  const vipGroup = document.querySelector('.pricing-group[data-type="vip"]')

  if (familyGroup) {
    familyGroup.style.display = typeCounts.family > 0 ? "block" : "none"
    const countSpan = familyGroup.querySelector(".type-count")
    if (countSpan) countSpan.textContent = `(${typeCounts.family} umbrellas)`
  }

  if (doubleGroup) {
    doubleGroup.style.display = typeCounts.double > 0 ? "block" : "none"
    const countSpan = doubleGroup.querySelector(".type-count")
    if (countSpan) countSpan.textContent = `(${typeCounts.double} umbrellas)`
  }

  if (vipGroup) {
    vipGroup.style.display = typeCounts.vip > 0 ? "block" : "none"
    const countSpan = vipGroup.querySelector(".type-count")
    if (countSpan) countSpan.textContent = `(${typeCounts.vip} umbrellas)`
  }
}

// Get umbrella type counts
function getUmbrellaTypeCounts() {
  const counts = { family: 0, double: 0, vip: 0 }

  beachData.umbrellas.forEach((umbrella) => {
    if (counts.hasOwnProperty(umbrella.type)) {
      counts[umbrella.type]++
    }
  })

  return counts
}

// Update layout preview
function updateLayoutPreview() {
  if (!configLayoutPreview) return

  const rows = Number.parseInt(configRowsCount.value) || 5
  const columns = Number.parseInt(configColumnsCount.value) || 10

  configLayoutPreview.innerHTML = ""
  configLayoutPreview.style.gridTemplateColumns = `repeat(${Math.min(columns, 10)}, 1fr)`

  const maxPreviewItems = Math.min(rows * columns, 50) // Limit preview items
  for (let i = 1; i <= maxPreviewItems; i++) {
    const previewUmbrella = document.createElement("div")
    previewUmbrella.className = "preview-umbrella"
    previewUmbrella.textContent = i
    configLayoutPreview.appendChild(previewUmbrella)
  }

  if (rows * columns > 50) {
    const moreIndicator = document.createElement("div")
    moreIndicator.className = "preview-umbrella"
    moreIndicator.textContent = "..."
    moreIndicator.style.backgroundColor = "#f0f0f0"
    configLayoutPreview.appendChild(moreIndicator)
  }
}

// Save configuration
function saveConfiguration() {
  // Validate inputs
  if (!configBeachNameInput.value.trim()) {
    showToast("Beach bar name is required", "error")
    return
  }

  const rows = Number.parseInt(configRowsCount.value)
  const columns = Number.parseInt(configColumnsCount.value)

  if (isNaN(rows) || rows < 1 || rows > 20 || isNaN(columns) || columns < 1 || columns > 20) {
    showToast("Please enter valid dimensions (1-20)", "error")
    return
  }

  // Save beach info
  beachData.info.name = configBeachNameInput.value.trim()
  beachData.info.location = configBeachLocationInput.value.trim()
  beachData.info.contactPhone = configContactPhoneInput.value.trim()
  beachData.info.contactEmail = configContactEmailInput.value.trim()
  if (configDescriptionInput) {
    beachData.info.description = configDescriptionInput.value.trim()
  }

  // Update beach name in the sidebar
  if (beachNameElement) {
    beachNameElement.textContent = beachData.info.name
  }

  // Save layout dimensions
  const oldRows = beachData.layout.rows
  const oldColumns = beachData.layout.columns
  beachData.layout.rows = rows
  beachData.layout.columns = columns

  // Recreate umbrellas if dimensions changed
  if (oldRows !== rows || oldColumns !== columns) {
    // Save existing umbrella statuses and types where possible
    const existingUmbrellas = {}
    beachData.umbrellas.forEach((umbrella) => {
      existingUmbrellas[`${umbrella.row}-${umbrella.column}`] = {
        status: umbrella.status,
        type: umbrella.type || "family",
      }
    })

    // Create new umbrellas
    beachData.umbrellas = []
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= columns; col++) {
        const existing = existingUmbrellas[`${row}-${col}`]
        beachData.umbrellas.push({
          id: `umbrella-${row}-${col}`,
          number: (row - 1) * columns + col,
          row: row,
          column: col,
          status: existing?.status || "available",
          type: existing?.type || "family",
        })
      }
    }
  }

  // Save pricing
  beachData.settings.familyPrice = Number.parseFloat(configFamilyPrice.value) || 10.0
  beachData.settings.doublePrice = Number.parseFloat(configDoublePrice.value) || 15.0
  beachData.settings.vipPrice = Number.parseFloat(configVipPrice.value) || 25.0

  // Save operating hours
  beachData.settings.openingTime = configOpeningTime.value
  beachData.settings.closingTime = configClosingTime.value
  beachData.settings.timeSlotDuration = Number.parseInt(configTimeSlot.value)

  // Save operating days
  const operatingDays = []
  configOperatingDays.forEach((checkbox) => {
    if (checkbox.checked) {
      operatingDays.push(Number.parseInt(checkbox.value))
    }
  })
  beachData.settings.operatingDays = operatingDays

  // Save logo if uploaded
  if (logoFile) {
    beachData.info.logoUrl = logoFile
  }

  // Save data
  saveData()

  // Update other views
  renderDashboard()
  updateBeachInfoForm()
  updateSettingsForm()
  populateTimeSlots()
  updateConfigurationPricing()

  showToast("Configuration saved successfully!", "success")
  addNotification("Beach configuration has been updated", "info")
}

// Reset configuration
function resetConfiguration() {
  if (confirm("Are you sure you want to reset all configuration settings? This cannot be undone.")) {
    // Reset to default values
    beachData.info = {
      name: "Beach Manager",
      location: "",
      contactPhone: "",
      contactEmail: "",
      description: "",
      logoUrl: null,
    }

    beachData.layout = {
      rows: 5,
      columns: 10,
      spacing: 3,
    }

    beachData.settings = {
      openingTime: "08:00",
      closingTime: "20:00",
      timeSlotDuration: 60,
      familyPrice: 10.0,
      doublePrice: 15.0,
      vipPrice: 25.0,
      currency: "USD",
      operatingDays: [0, 1, 2, 3, 4, 5, 6],
      maxAdvanceBooking: 30,
      cancellationPolicy: 24,
      depositPercentage: 20,
    }

    // Reset umbrellas
    beachData.umbrellas = []
    for (let row = 1; row <= 5; row++) {
      for (let col = 1; col <= 10; col++) {
        beachData.umbrellas.push({
          id: `umbrella-${row}-${col}`,
          number: (row - 1) * 10 + col,
          row: row,
          column: col,
          status: "available",
          type: "family",
        })
      }
    }

    // Remove logo
    logoFile = null
    if (logoPreview) {
      logoPreview.style.display = "none"
    }
    if (logoUpload) {
      logoUpload.value = ""
    }

    // Update forms and views
    loadConfigurationForm()
    updateBeachInfoForm()
    updateSettingsForm()
    renderDashboard()
    populateTimeSlots()

    // Save data
    saveData()

    showToast("Configuration reset to defaults", "success")
  }
}

// Handle logo upload
function handleLogoUpload(e) {
  const file = e.target.files[0]
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      showToast("File size must be less than 5MB", "error")
      return
    }

    if (!file.type.startsWith("image/")) {
      showToast("Please select an image file", "error")
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      logoFile = event.target.result
      if (logoImage && logoPreview) {
        logoImage.src = logoFile
        logoPreview.style.display = "block"
      }
    }
    reader.readAsDataURL(file)
  }
}

// Remove logo
function removeLogoFile() {
  logoFile = null
  beachData.info.logoUrl = null
  if (logoPreview) {
    logoPreview.style.display = "none"
  }
  if (logoUpload) {
    logoUpload.value = ""
  }
  saveData()
  showToast("Logo removed", "success")
}

// Update beach info form
function updateBeachInfoForm() {
  if (beachBarNameInput) {
    beachBarNameInput.value = beachData.info.name || ""
    beachLocationInput.value = beachData.info.location || ""
    contactPhoneInput.value = beachData.info.contactPhone || ""
    contactEmailInput.value = beachData.info.contactEmail || ""
  }
}

// Update settings form
function updateSettingsForm() {
  if (rowsCount) {
    rowsCount.value = beachData.layout.rows
    columnsCount.value = beachData.layout.columns
    openingTimeInput.value = beachData.settings.openingTime
    closingTimeInput.value = beachData.settings.closingTime
    timeSlotInput.value = beachData.settings.timeSlotDuration
  }
}

// Save beach info
function saveBeachInfo() {
  if (!beachBarNameInput) return

  beachData.info.name = beachBarNameInput.value.trim() || "Beach Manager"
  beachData.info.location = beachLocationInput.value.trim()
  beachData.info.contactPhone = contactPhoneInput.value.trim()
  beachData.info.contactEmail = contactEmailInput.value.trim()

  // Update beach name in sidebar
  if (beachNameElement) {
    beachNameElement.textContent = beachData.info.name
  }

  saveData()
  showToast("Beach information saved successfully!", "success")
}

// Apply layout changes
function applyLayoutChanges() {
  if (!rowsCount) return

  const rows = Number.parseInt(rowsCount.value)
  const columns = Number.parseInt(columnsCount.value)

  if (isNaN(rows) || rows < 1 || isNaN(columns) || columns < 1) {
    showToast("Please enter valid dimensions", "error")
    return
  }

  // Save existing umbrella statuses and types where possible
  const existingUmbrellas = {}
  beachData.umbrellas.forEach((umbrella) => {
    existingUmbrellas[`${umbrella.row}-${umbrella.column}`] = {
      status: umbrella.status,
      type: umbrella.type || "family",
    }
  })

  // Update layout dimensions
  beachData.layout.rows = rows
  beachData.layout.columns = columns

  // Create new umbrellas
  beachData.umbrellas = []
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= columns; col++) {
      const existing = existingUmbrellas[`${row}-${col}`]
      beachData.umbrellas.push({
        id: `umbrella-${row}-${col}`,
        number: (row - 1) * columns + col,
        row: row,
        column: col,
        status: existing?.status || "available",
        type: existing?.type || "family",
      })
    }
  }

  // Save data
  saveData()

  // Render dashboard
  renderDashboard()

  showToast("Layout updated successfully!", "success")
}

// Save settings
function saveSettings() {
  if (!openingTimeInput) return

  beachData.settings.openingTime = openingTimeInput.value
  beachData.settings.closingTime = closingTimeInput.value
  beachData.settings.timeSlotDuration = Number.parseInt(timeSlotInput.value)

  // Save data
  saveData()

  // Update time slots
  populateTimeSlots()

  showToast("Settings saved successfully!", "success")
  addNotification("Beach settings have been updated", "info")
}

// Show toast notification
function showToast(message, type = "success") {
  if (!toast || !toastMessage || !toastIcon) return

  toastMessage.textContent = message

  if (type === "error") {
    toastIcon.className = "fas fa-exclamation-circle"
    toast.querySelector(".toast-icon").classList.add("error")
  } else {
    toastIcon.className = "fas fa-check-circle"
    toast.querySelector(".toast-icon").classList.remove("error")
  }

  toast.classList.add("show")

  // Auto hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// Switch between views
function switchView(view) {
  currentView = view

  // Hide all views
  document.querySelectorAll(".view").forEach((v) => {
    v.classList.remove("active")
  })

  // Show selected view
  const viewElement = document.getElementById(view)
  if (viewElement) {
    viewElement.classList.add("active")
  }

  // Update active menu item
  menuItems.forEach((item) => {
    if (item.getAttribute("data-view") === view) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })

  // Refresh the current view
  if (view === "dashboard") {
    renderDashboard()
  } else if (view === "reservations") {
    renderReservations()
  } else if (view === "calendar") {
    renderCalendar()
  } else if (view === "configuration") {
    loadConfigurationForm()
  } else if (view === "receipt") {
    renderReceipt()
  }

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("active")
  }
}

// Update current date display
function updateCurrentDateDisplay() {
  if (!currentDateDisplay) return

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  currentDateDisplay.textContent = new Date().toLocaleDateString("en-US", options)
}

// Render dashboard with umbrella grid
function renderDashboard() {
  if (!umbrellaGrid) return

  umbrellaGrid.innerHTML = ""
  const filter = statusFilter ? statusFilter.value : "all"

  // Set grid columns based on layout
  umbrellaGrid.style.gridTemplateColumns = `repeat(${beachData.layout.columns}, 1fr)`

  // Generate sample umbrellas if none exist
  if (beachData.umbrellas.length === 0) {
    initializeDefaultData()
  }

  beachData.umbrellas.forEach((umbrella) => {
    if (filter === "all" || umbrella.status === filter) {
      const umbrellaElement = document.createElement("div")
      umbrellaElement.className = `umbrella ${umbrella.status}`
      umbrellaElement.setAttribute("data-id", umbrella.id)

      // Check if umbrella has reservations
      const hasReservation = beachData.reservations.some((res) => res.umbrellaId === umbrella.id)

      // Get type label and icon
      const typeInfo = getTypeInfo(umbrella.type || "family")

      umbrellaElement.innerHTML = `
        <i class="fas fa-umbrella-beach"></i>
        <span class="umbrella-number">${umbrella.number}</span>
        <div class="umbrella-type-label">
          <i class="${typeInfo.icon}"></i>
          <span>${typeInfo.label}</span>
        </div>
        ${hasReservation ? '<div class="reservation-indicator"></div>' : ""}
      `

      if (isEditingLayout) {
        umbrellaElement.classList.add("editing")
        umbrellaElement.addEventListener("click", () => {
          // Cycle through statuses when editing
          const statuses = ["available", "reserved", "occupied", "maintenance"]
          const currentIndex = statuses.indexOf(umbrella.status)
          const nextIndex = (currentIndex + 1) % statuses.length
          umbrella.status = statuses[nextIndex]
          umbrellaElement.className = `umbrella ${umbrella.status} editing`
          saveData()
          updateStatusCounts()
        })
      } else if (isChangingStatus) {
        umbrellaElement.classList.add("status-changing")
        umbrellaElement.addEventListener("click", () => {
          showStatusChangeModal(umbrella)
        })
      } else {
        umbrellaElement.addEventListener("click", () => {
          showUmbrellaModal(umbrella)
        })
      }

      umbrellaGrid.appendChild(umbrellaElement)
    }
  })

  // Update status counts
  updateStatusCounts()

  // Update configuration pricing if on that view
  if (currentView === "configuration") {
    updateConfigurationPricing()
  }
}

// Get type information
function getTypeInfo(type) {
  const typeMap = {
    family: { label: "Family", icon: "fas fa-users", color: "#4CAF50" },
    double: { label: "Double", icon: "fas fa-restroom", color: "#FF9800" },
    vip: { label: "VIP", icon: "fas fa-crown", color: "#9C27B0" },
    standard: { label: "Standard", icon: "fas fa-umbrella-beach", color: "#2196F3" },
    premium: { label: "Premium", icon: "fas fa-star", color: "#FF5722" },
  }

  return typeMap[type] || typeMap.family
}

// Update status counts
function updateStatusCounts() {
  let available = 0
  let reserved = 0
  let occupied = 0
  let maintenance = 0

  beachData.umbrellas.forEach((umbrella) => {
    switch (umbrella.status) {
      case "available":
        available++
        break
      case "reserved":
        reserved++
        break
      case "occupied":
        occupied++
        break
      case "maintenance":
        maintenance++
        break
    }
  })

  if (availableCount) availableCount.textContent = available
  if (reservedCount) reservedCount.textContent = reserved
  if (occupiedCount) occupiedCount.textContent = occupied
  if (maintenanceCount) maintenanceCount.textContent = maintenance
}

// Toggle layout editing mode
function toggleLayoutEdit() {
  if (!editLayoutBtn) return

  isEditingLayout = !isEditingLayout

  if (isEditingLayout) {
    editLayoutBtn.innerHTML = '<i class="fas fa-check"></i><span>Done Editing</span>'
    editLayoutBtn.classList.add("primary")
    editLayoutBtn.classList.remove("secondary")
  } else {
    editLayoutBtn.innerHTML = '<i class="fas fa-edit"></i><span>Edit Layout</span>'
    editLayoutBtn.classList.add("secondary")
    editLayoutBtn.classList.remove("primary")
  }

  renderDashboard()
}

// Toggle status changing mode
function toggleStatusChange() {
  if (!changestatusBtn) return

  isChangingStatus = !isChangingStatus

  if (isChangingStatus) {
    changestatusBtn.innerHTML = '<i class="fas fa-check"></i><span>Done Changing</span>'
    changestatusBtn.classList.add("primary")
    changestatusBtn.classList.remove("secondary")

    // Disable edit layout mode if active
    if (isEditingLayout) {
      toggleLayoutEdit()
    }
  } else {
    changestatusBtn.innerHTML = '<i class="fas fa-sync-alt"></i><span>Change Type</span>'
    changestatusBtn.classList.add("secondary")
    changestatusBtn.classList.remove("primary")
  }

  renderDashboard()
  addNotification(`Umbrella #${umbrella.number} status changed to ${newStatus}`, "info")
}

// Show status change modal
function showStatusChangeModal(umbrella) {
  const statusOptions = [
    { value: "family", label: "Family", icon: "fas fa-users", color: "text-green-500" },
    { value: "double", label: "Double", icon: "fas fa-restroom", color: "text-orange-500" },
    { value: "vip", label: "VIP", icon: "fas fa-crown", color: "text-purple-500" },
  ]

  const modalContent = `
    <div class="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Change Type for Umbrella #${umbrella.number}</h3>
      <div class="grid grid-cols-1 gap-3 mb-6">
        ${statusOptions
          .map(
            (option) => `
            <button
              class="flex items-center gap-3 p-3 rounded-xl border transition duration-150 hover:bg-indigo-50
              ${umbrella.type === option.value ? "bg-indigo-100 border-indigo-300" : "border-gray-200"}"
              data-status="${option.value}">
              <i class="${option.icon} ${option.color} text-xl"></i>
              <span class="text-gray-700 font-medium">${option.label}</span>
            </button>
          `,
          )
          .join("")}
      </div>
      <div class="flex justify-end gap-2">
        <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl close-status-modal">Cancel</button>
      </div>
    </div>
  `

  const modal = document.createElement("div")
  modal.className = "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
  modal.innerHTML = modalContent

  document.body.appendChild(modal)

  modal.querySelectorAll("[data-status]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const newType = btn.getAttribute("data-status")
      umbrella.type = newType
      saveData()
      renderDashboard()
      updateConfigurationPricing()
      document.body.removeChild(modal)
      showToast(`Umbrella #${umbrella.number} type changed to ${newType}`, "success")
    })
  })

  modal.querySelector(".close-status-modal").addEventListener("click", () => {
    document.body.removeChild(modal)
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal)
    }
  })
}

// FIXED RECEIPT FUNCTIONALITY
// FIXED RECEIPT FUNCTIONALITY
function renderReceipt() {
  const receiptContent = document.getElementById("receipt-content")
  if (!receiptContent) return

  // Get selected date and period
  const dateInput = document.getElementById("receipt-date")
  const periodSelect = document.getElementById("receipt-period")

  // Set default date to today if not set
  if (dateInput && !dateInput.value) {
    const today = new Date()
    dateInput.value = today.toISOString().split("T")[0]
  }

  const selectedDate = dateInput ? new Date(dateInput.value) : new Date()
  const period = periodSelect ? periodSelect.value : "daily"

  // Calculate revenue based on actual reservations
  const { totalRevenue, revenueByType, reservationCount, filteredReservations } = calculateRevenue(selectedDate, period)

  // Format date display
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formattedDate = selectedDate.toLocaleDateString("en-US", dateOptions)

  // Create receipt HTML
  receiptContent.innerHTML = `
    <div class="receipt-info-section">
      <div class="receipt-business-info">
        <h3>${beachData.info.name}</h3>
        <p>${beachData.info.location}</p>
        <p>Phone: ${beachData.info.contactPhone}</p>
        <p>Email: ${beachData.info.contactEmail}</p>
      </div>
      <div class="receipt-report-info">
        <h3>${period.charAt(0).toUpperCase() + period.slice(1)} Revenue Report</h3>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Period:</strong> ${period.charAt(0).toUpperCase() + period.slice(1)}</p>
      </div>
    </div>
    
    <div class="receipt-summary-cards">
      <div class="receipt-summary-card total-revenue">
        <div class="card-icon">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <h4>$${totalRevenue.toFixed(2)}</h4>
        <p>Total Revenue</p>
      </div>
      <div class="receipt-summary-card total-umbrellas">
        <div class="card-icon">
          <i class="fas fa-umbrella-beach"></i>
        </div>
        <h4>${reservationCount}</h4>
        <p>Reservations</p>
      </div>
      <div class="receipt-summary-card avg-price">
        <div class="card-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h4>$${reservationCount > 0 ? (totalRevenue / reservationCount).toFixed(2) : "0.00"}</h4>
        <p>Average Price</p>
      </div>
      <div class="receipt-summary-card occupancy-rate">
        <div class="card-icon">
          <i class="fas fa-percentage"></i>
        </div>
        <h4>${beachData.umbrellas.length > 0 ? ((reservationCount / beachData.umbrellas.length) * 100).toFixed(1) : "0"}%</h4>
        <p>Occupancy Rate</p>
      </div>
    </div>
    
    <div class="receipt-breakdown-section">
      <h3>Revenue Breakdown by Umbrella Type</h3>
      <table class="receipt-breakdown-table">
        <thead>
          <tr>
            <th>Umbrella Type</th>
            <th>Reservations</th>
            <th>Price per Unit</th>
            <th>Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(revenueByType)
            .filter(([_, data]) => data.count > 0)
            .map(
              ([type, data]) => `
              <tr>
                <td class="type-cell">${type.charAt(0).toUpperCase() + type.slice(1)}</td>
                <td>${data.count}</td>
                <td>$${data.price.toFixed(2)}</td>
                <td class="revenue-cell">$${data.revenue.toFixed(2)}</td>
              </tr>
            `
            )
            .join("")}
          ${
            Object.values(revenueByType).every((data) => data.count === 0)
              ? '<tr><td colspan="4" style="text-align: center; color: #666;">No reservations found for this period</td></tr>'
              : ""
          }
        </tbody>
      </table>
    </div>
    
    <div class="receipt-total-section">
      <div class="receipt-total-row">
        <span class="receipt-total-label">Subtotal:</span>
        <span class="receipt-total-amount">$${totalRevenue.toFixed(2)}</span>
      </div>
      <div class="receipt-total-row">
        <span class="receipt-total-label">Tax (0%):</span>
        <span class="receipt-total-amount">$0.00</span>
      </div>
      <div class="receipt-total-row">
        <span class="receipt-total-label">Total Revenue:</span>
        <span class="receipt-total-amount">$${totalRevenue.toFixed(2)}</span>
      </div>
    </div>
    
    <div class="receipt-actions">
      <button id="print-receipt" class="btn primary">
        <i class="fas fa-print"></i>
        <span>Print Receipt</span>
      </button>
      <button id="export-receipt-pdf" class="btn secondary">
        <i class="fas fa-file-pdf"></i>
        <span>Export PDF</span>
      </button>
    </div>
  `

  // Add event listeners for buttons
  document.getElementById("print-receipt")?.addEventListener("click", () => {
    window.print()
  })

  document.getElementById("export-receipt-pdf")?.addEventListener("click", () => {
    exportReceiptToPDF(selectedDate, period, totalRevenue, revenueByType, reservationCount)
  })
}


// ... existing code ...
function calculateRevenue(date, period) {
  let totalRevenue = 0;
  const revenueByType = {};
  let reservationCount = 0;

  // Initialize revenue by type
  beachData.umbrellaTypes.forEach((type) => {
    revenueByType[type] = {
      count: 0,
      price: beachData.settings[`${type}Price`] || 0,
      revenue: 0,
    };
  });

  // Filter reservations based on period
  const filteredReservations = beachData.reservations.filter((reservation) => {
    const reservationDate = new Date(reservation.date);
    if (period === "daily") {
      return isSameDay(reservationDate, date);
    } else if (period === "weekly") {
      const startOfWeek = new Date(date);
      startOfWeek.setDate(date.getDate() - date.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);
      return reservationDate >= startOfWeek && reservationDate <= endOfWeek;
    } else if (period === "monthly") {
      return reservationDate.getMonth() === date.getMonth() && reservationDate.getFullYear() === date.getFullYear();
    }
    return false;
  });

  // Calculate revenue
  filteredReservations.forEach((reservation) => {
    const umbrella = beachData.umbrellas.find((u) => u.id === reservation.umbrellaId);
    if (umbrella) {
      const type = umbrella.type || "family";
      const price = beachData.settings[`${type}Price`] || 0;
      revenueByType[type].count++;
      revenueByType[type].revenue += price;
      totalRevenue += price;
      reservationCount++;
    }
  });

  return { totalRevenue, revenueByType, reservationCount, filteredReservations };
}
// ... existing code ...

// Export receipt to PDF
function exportReceiptToPDF(selectedDate, period, totalRevenue, revenueByType, reservationCount) {
  try {
    const { jsPDF } = window.jspdf
    const doc = new jsPDF()

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Add header
    doc.setFontSize(20)
    doc.text(`${period.charAt(0).toUpperCase() + period.slice(1)} Revenue Report`, 20, 30)

    doc.setFontSize(12)
    doc.text(`Date: ${formattedDate}`, 20, 45)
    doc.text(`${beachData.info.name}`, 20, 55)
    doc.text(`${beachData.info.location}`, 20, 65)

    // Add summary
    doc.setFontSize(14)
    doc.text(`Total Revenue: $${totalRevenue.toFixed(2)}`, 20, 85)
    doc.text(`Total Reservations: ${reservationCount}`, 20, 95)

    // Add table
    const tableData = []
    Object.entries(revenueByType).forEach(([type, data]) => {
      if (data.count > 0) {
        tableData.push([
          type.charAt(0).toUpperCase() + type.slice(1),
          data.count.toString(),
          `$${data.price.toFixed(2)}`,
          `$${data.revenue.toFixed(2)}`,
        ])
      }
    })

    if (tableData.length > 0) {
      doc.autoTable({
        head: [["Type", "Reservations", "Price", "Total"]],
        body: tableData,
        startY: 110,
        styles: {
          fontSize: 10,
          cellPadding: 3,
        },
        headStyles: {
          fillColor: [102, 126, 234],
          textColor: [255, 255, 255],
        },
      })
    }

    // Add total at bottom
    const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 20 : 130
    doc.setFontSize(16)
    doc.text(`Total Revenue: $${totalRevenue.toFixed(2)}`, 20, finalY)

    // Save PDF
    const fileName = `Receipt_${period}_${selectedDate.toISOString().slice(0, 10)}.pdf`
    doc.save(fileName)

    showToast("Receipt exported to PDF successfully", "success")
  } catch (error) {
    console.error("PDF export error:", error)
    showToast("Failed to export receipt to PDF", "error")
  }
}

// Helper function to check if two dates are the same day
function isSameDay(date1, date2) {
  if (!date1 || !date2) return false
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
}

// Render reservations
function renderReservations() {
  if (!reservationsList) return

  reservationsList.innerHTML = ""
  const filter = reservationFilter ? reservationFilter.value : "all"
  const searchTerm = reservationSearch ? reservationSearch.value.toLowerCase() : ""

  // Filter reservations
  let filteredReservations = beachData.reservations

  // Apply filter
  if (filter !== "all") {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (filter === "today") {
      filteredReservations = filteredReservations.filter((res) => {
        if (res.type === "single") {
          return isSameDay(res.date, today)
        } else {
          // For subscriptions, check if today is within the date range and matches day of week
          return res.startDate <= today && res.endDate >= today && res.daysOfWeek.includes(today.getDay())
        }
      })
    } else if (filter === "upcoming") {
      filteredReservations = filteredReservations.filter((res) => {
        if (res.type === "single") {
          return res.date > today
        } else {
          return res.endDate >= today
        }
      })
    } else if (filter === "past") {
      filteredReservations = filteredReservations.filter((res) => {
        if (res.type === "single") {
          return res.date < today
        } else {
          return res.endDate < today
        }
      })
    } else if (filter === "subscription") {
      filteredReservations = filteredReservations.filter((res) => res.type === "subscription")
    }
  }

  // Apply search
  if (searchTerm) {
    filteredReservations = filteredReservations.filter(
      (res) =>
        res.customerName.toLowerCase().includes(searchTerm) ||
        res.customerPhone.toLowerCase().includes(searchTerm) ||
        (res.notes && res.notes.toLowerCase().includes(searchTerm)),
    )
  }

  // Sort reservations by date
  filteredReservations.sort((a, b) => {
    const dateA = a.type === "single" ? a.date : a.startDate
    const dateB = b.type === "single" ? b.date : b.startDate
    return dateA - dateB
  })

  // Render reservations
  if (filteredReservations.length === 0) {
    reservationsList.innerHTML =
      '<div class="no-results" style="text-align: center; padding: 40px; color: #666;">No reservations found</div>'
  } else {
    filteredReservations.forEach((reservation) => {
      const umbrella = beachData.umbrellas.find((u) => u.id === reservation.umbrellaId)
      const umbrellaNumber = umbrella ? umbrella.number : "Unknown"

      const reservationCard = document.createElement("div")
      reservationCard.className = `reservation-card ${getReservationClass(reservation)}`
      reservationCard.setAttribute("data-id", reservation.id)

      let dateDisplay = ""
      if (reservation.type === "single") {
        dateDisplay = formatDate(reservation.date)
      } else {
        dateDisplay = `${formatDate(reservation.startDate)} - ${formatDate(reservation.endDate)}`
      }

      reservationCard.innerHTML = `
        <div class="reservation-header">
          <div class="reservation-title">${reservation.customerName}</div>
          <div class="reservation-status ${isActiveReservation(reservation) ? "active" : ""}">${
            isActiveReservation(reservation) ? "Active" : "Scheduled"
          }</div>
        </div>
        <div class="reservation-details">
          <div class="detail-row">
            <div class="detail-label">Umbrella:</div>
            <div>#${umbrellaNumber}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Date:</div>
            <div>${dateDisplay}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Time:</div>
            <div>${reservation.startTime} - ${reservation.endTime}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone:</div>
            <div>${reservation.customerPhone}</div>
          </div>
          ${
            reservation.notes
              ? `<div class="detail-row">
                <div class="detail-label">Notes:</div>
                <div>${reservation.notes}</div>
              </div>`
              : ""
          }
        </div>
        <div class="reservation-actions">
          <button class="btn secondary edit-reservation" data-id="${reservation.id}">
            <i class="fas fa-edit"></i>
            <span>Edit</span>
          </button>
          <button class="btn secondary cancel-reservation" data-id="${reservation.id}">
            <i class="fas fa-times"></i>
            <span>Cancel</span>
          </button>
        </div>
      `

      reservationsList.appendChild(reservationCard)
    })

    // Add event listeners to reservation actions
    document.querySelectorAll(".edit-reservation").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const reservationId = e.currentTarget.getAttribute("data-id")
        const reservation = beachData.reservations.find((r) => r.id === reservationId)
        if (reservation) {
          showEditReservationModal(reservation)
        }
      })
    })

    document.querySelectorAll(".cancel-reservation").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const reservationId = e.currentTarget.getAttribute("data-id")
        if (confirm("Are you sure you want to cancel this reservation?")) {
          const reservation = beachData.reservations.find(r => r.id === reservationId)
          beachData.reservations = beachData.reservations.filter((r) => r.id !== reservationId)
          saveData()
          renderReservations()
          renderDashboard()
          renderCalendar()
          showToast('Reservation cancelled successfully', 'success')
          addNotification(`Reservation for ${reservation.customerName} has been cancelled`, 'warning')
        }
      })
    })
  }
}

// Get reservation class for styling
function getReservationClass(reservation) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  if (reservation.type === "subscription") {
    return "subscription"
  }

  if (isSameDay(reservation.date, today)) {
    return "today"
  }

  if (reservation.date > today) {
    return "upcoming"
  }

  return ""
}

// Check if reservation is active
function isActiveReservation(reservation) {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  if (reservation.type === "single") {
    if (!isSameDay(reservation.date, today)) {
      return false
    }
  } else {
    // Subscription
    if (today < reservation.startDate || today > reservation.endDate) {
      return false
    }
    if (!reservation.daysOfWeek.includes(today.getDay())) {
      return false
    }
  }

  // Check time
  const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`
  return currentTime >= reservation.startTime && currentTime <= reservation.endTime
}

// Render calendar
function renderCalendar() {
  if (!calendarDays || !calendarMonthYear) return

  calendarDays.innerHTML = ""

  // Update month/year display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  calendarMonthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`

  // Get first day of month and number of days
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDay = firstDay.getDay() // 0 = Sunday, 1 = Monday, etc.

  // Get days from previous month
  const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()

  // Create calendar grid
  let dayCount = 1
  let nextMonthDay = 1

  // Create 6 rows (max needed for any month)
  for (let i = 0; i < 6; i++) {
    // Stop if we've already rendered all days
    if (dayCount > daysInMonth && i > 0) break

    for (let j = 0; j < 7; j++) {
      const dayElement = document.createElement("div")
      dayElement.className = "calendar-day"

      if (i === 0 && j < startingDay) {
        // Previous month
        const prevMonthDay = prevMonthLastDay - startingDay + j + 1
        dayElement.classList.add("other-month")
        dayElement.innerHTML = `<div class="day-number">${prevMonthDay}</div><div class="day-events"></div>`
      } else if (dayCount > daysInMonth) {
        // Next month
        dayElement.classList.add("other-month")
        dayElement.innerHTML = `<div class="day-number">${nextMonthDay}</div><div class="day-events"></div>`
        nextMonthDay++
      } else {
        // Current month
        const date = new Date(currentYear, currentMonth, dayCount)
        const today = new Date()

        if (isSameDay(date, today)) {
          dayElement.classList.add("today")
        }

        dayElement.innerHTML = `<div class="day-number">${dayCount}</div><div class="day-events"></div>`

        // Add events for this day
        const dayEvents = dayElement.querySelector(".day-events")
        const eventsForDay = getEventsForDay(date)

        eventsForDay.forEach((event) => {
          const eventElement = document.createElement("div")
          eventElement.className = `day-event ${event.type === "subscription" ? "subscription" : ""}`
          eventElement.textContent = `${event.startTime} - ${event.customerName}`
          eventElement.setAttribute("data-id", event.id)
          eventElement.addEventListener("click", () => {
            showEventDetails(event)
          })
          dayEvents.appendChild(eventElement)
        })

        dayCount++
      }

      calendarDays.appendChild(dayElement)
    }
  }
}

// Get events for a specific day
function getEventsForDay(date) {
  const events = []

  beachData.reservations.forEach((reservation) => {
    if (reservation.type === "single") {
      if (isSameDay(reservation.date, date)) {
        events.push(reservation)
      }
    } else if (reservation.type === "subscription") {
      // Check if date is within subscription range and matches day of week
      if (
        date >= reservation.startDate &&
        date <= reservation.endDate &&
        reservation.daysOfWeek &&
        reservation.daysOfWeek.includes(date.getDay())
      ) {
        events.push(reservation)
      }
    }
  })

  // Sort by start time
  events.sort((a, b) => {
    return a.startTime.localeCompare(b.startTime)
  })

  return events
}

// Show event details
function showEventDetails(event) {
  const umbrella = beachData.umbrellas.find((u) => u.id === event.umbrellaId)
  const umbrellaNumber = umbrella ? umbrella.number : "Unknown"

  let dateDisplay = ""
  if (event.type === "single") {
    dateDisplay = formatDate(event.date)
  } else {
    dateDisplay = `${formatDate(event.startDate)} - ${formatDate(event.endDate)}`
    if (event.daysOfWeek && event.daysOfWeek.length > 0) {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      const selectedDays = event.daysOfWeek.map((day) => daysOfWeek[day]).join(", ")
      dateDisplay += ` (${selectedDays})`
    }
  }

  // Create info box
  const infoBox = document.createElement("div")
  infoBox.className = "info-box"
  infoBox.innerHTML = `
    <button class="close-info">&times;</button>
    <h3>Reservation Details</h3>
    <div class="info-content">
      <p><strong>Customer:</strong> ${event.customerName}</p>
      <p><strong>Phone:</strong> ${event.customerPhone}</p>
      <p><strong>Umbrella:</strong> #${umbrellaNumber}</p>
      <p><strong>Date:</strong> ${dateDisplay}</p>
      <p><strong>Time:</strong> ${event.startTime} - ${event.endTime}</p>
      ${event.notes ? `<p><strong>Notes:</strong> ${event.notes}</p>` : ""}
    </div>
    <hr>
    <div class="reservation-actions">
      <button class="btn secondary edit-event" data-id="${event.id}">
        <i class="fas fa-edit"></i>
        <span>Edit</span>
      </button>
      <button class="btn secondary cancel-event" data-id="${event.id}">
        <i class="fas fa-times"></i>
        <span>Cancel</span>
      </button>
    </div>
  `

  document.body.appendChild(infoBox)

  // Add event listeners
  infoBox.querySelector(".close-info").addEventListener("click", () => {
    document.body.removeChild(infoBox)
  })

  infoBox.querySelector(".edit-event").addEventListener("click", () => {
    document.body.removeChild(infoBox)
    showEditReservationModal(event)
  })

  infoBox.querySelector(".cancel-event").addEventListener("click", () => {
    if (confirm("Are you sure you want to cancel this reservation?")) {
      beachData.reservations = beachData.reservations.filter((r) => r.id !== event.id)
      saveData()
      renderReservations()
      renderDashboard()
      renderCalendar()
      document.body.removeChild(infoBox)
      showToast("Reservation cancelled successfully", "success")
    }
  })
}

// Show umbrella modal
function showUmbrellaModal(umbrella) {
  if (!umbrellaModal || !modalTitle || !umbrellaStatusSelect || !umbrellaLocation || !umbrellaReservation) return

  currentUmbrellaId = umbrella.id
  modalTitle.textContent = `Umbrella #${umbrella.number}`
  umbrellaStatusSelect.value = umbrella.status
  umbrellaLocation.textContent = `Row ${umbrella.row}, Column ${umbrella.column}`

  // Check if umbrella has reservations
  const reservations = beachData.reservations.filter((res) => res.umbrellaId === umbrella.id)
  if (reservations.length > 0) {
    // Sort by date
    reservations.sort((a, b) => {
      const dateA = a.type === "single" ? a.date : a.startDate
      const dateB = b.type === "single" ? b.date : b.startDate
      return dateA - dateB
    })

    const nextReservation = reservations[0]
    let reservationText = ""
    if (nextReservation.type === "single") {
      reservationText = `${formatDate(nextReservation.date)}, ${nextReservation.startTime} - ${
        nextReservation.endTime
      } (${nextReservation.customerName})`
    } else {
      reservationText = `Subscription: ${formatDate(nextReservation.startDate)} - ${formatDate(
        nextReservation.endDate,
      )} (${nextReservation.customerName})`
    }
    umbrellaReservation.textContent = reservationText
  } else {
    umbrellaReservation.textContent = "None"
  }

  umbrellaModal.classList.add("active")
}

// Update umbrella status
function updateUmbrellaStatus() {
  if (!currentUmbrellaId || !umbrellaStatusSelect) return

  const umbrella = beachData.umbrellas.find((u) => u.id === currentUmbrellaId)
  if (umbrella) {
    umbrella.status = umbrellaStatusSelect.value
    saveData()
    renderDashboard()
    showToast(`Umbrella #${umbrella.number} status updated to ${umbrella.status}`, "success")
  }
}

// Show new reservation modal
function showNewReservationModal() {
  if (!reservationModal || !reservationForm) return

  // Reset form
  reservationForm.reset()
  if (reservationType) {
    reservationType.value = "single"
    toggleReservationFields()
  }

  // Set default date to today
  const today = new Date()
  const formattedDate = formatDateForInput(today)
  if (reservationDate) reservationDate.value = formattedDate
  if (subscriptionStart) subscriptionStart.value = formattedDate

  // Set default end date to 1 month from today
  const nextMonth = new Date(today)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  if (subscriptionEnd) subscriptionEnd.value = formatDateForInput(nextMonth)

  // Populate umbrella select
  populateUmbrellaSelect()

  // Show modal
  const modalTitle = document.getElementById("reservation-modal-title")
  if (modalTitle) modalTitle.textContent = "New Reservation"
  reservationModal.classList.add("active")
}

// Show reservation modal for specific umbrella
function showReservationModal(umbrellaId) {
  if (!reservationModal || !reservationForm) return

  // Reset form
  reservationForm.reset()
  if (reservationType) {
    reservationType.value = "single"
    toggleReservationFields()
  }

  // Set default date to today
  const today = new Date()
  const formattedDate = formatDateForInput(today)
  if (reservationDate) reservationDate.value = formattedDate
  if (subscriptionStart) subscriptionStart.value = formattedDate

  // Set default end date to 1 month from today
  const nextMonth = new Date(today)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  if (subscriptionEnd) subscriptionEnd.value = formatDateForInput(nextMonth)

  // Populate umbrella select and select the specified umbrella
  populateUmbrellaSelect(umbrellaId)

  // Close umbrella modal
  if (umbrellaModal) umbrellaModal.classList.remove("active")

  // Show reservation modal
  const modalTitle = document.getElementById("reservation-modal-title")
  if (modalTitle) modalTitle.textContent = "New Reservation"
  reservationModal.classList.add("active")
}

// Show edit reservation modal
function showEditReservationModal(reservation) {
  if (!reservationModal || !reservationForm) return

  // Fill form with reservation data
  if (reservationType) {
    reservationType.value = reservation.type
    toggleReservationFields()
  }

  if (reservation.type === "single") {
    if (reservationDate) reservationDate.value = formatDateForInput(reservation.date)
  } else {
    if (subscriptionStart) subscriptionStart.value = formatDateForInput(reservation.startDate)
    if (subscriptionEnd) subscriptionEnd.value = formatDateForInput(reservation.endDate)

    // Check days of week
    const daysCheckboxes = document.querySelectorAll('#subscription-fields input[type="checkbox"]')
    daysCheckboxes.forEach((checkbox) => {
      checkbox.checked = reservation.daysOfWeek.includes(Number.parseInt(checkbox.value))
    })
  }

  if (reservationTimeStart) reservationTimeStart.value = reservation.startTime
  if (reservationTimeEnd) reservationTimeEnd.value = reservation.endTime
  if (customerName) customerName.value = reservation.customerName
  if (customerPhone) customerPhone.value = reservation.customerPhone
  if (reservationNotes) reservationNotes.value = reservation.notes || ""

  // Populate umbrella select and select the specified umbrella
  populateUmbrellaSelect(reservation.umbrellaId)

  // Store reservation ID for update
  reservationForm.setAttribute("data-reservation-id", reservation.id)

  // Show modal
  const modalTitle = document.getElementById("reservation-modal-title")
  if (modalTitle) modalTitle.textContent = "Edit Reservation"
  reservationModal.classList.add("active")
}

// Populate umbrella select
function populateUmbrellaSelect(selectedUmbrellaId = null) {
  if (!umbrellaSelect) return

  umbrellaSelect.innerHTML = ""

  // Sort umbrellas by number
  const sortedUmbrellas = [...beachData.umbrellas].sort((a, b) => a.number - b.number)

  sortedUmbrellas.forEach((umbrella) => {
    const option = document.createElement("option")
    option.value = umbrella.id
    option.textContent = `Umbrella #${umbrella.number} (${umbrella.status})`
    option.disabled = umbrella.status === "maintenance"
    if (umbrella.id === selectedUmbrellaId) {
      option.selected = true
    }
    umbrellaSelect.appendChild(option)
  })
}

// Toggle reservation fields based on type
function toggleReservationFields() {
  if (!reservationType || !singleReservationFields || !subscriptionFields) return

  const type = reservationType.value
  if (type === "single") {
    singleReservationFields.classList.remove("hidden")
    subscriptionFields.classList.add("hidden")
  } else {
    singleReservationFields.classList.add("hidden")
    subscriptionFields.classList.remove("hidden")
  }
}

// Populate time slots
function populateTimeSlots() {
  if (!reservationTimeStart || !reservationTimeEnd) return

  reservationTimeStart.innerHTML = ""
  reservationTimeEnd.innerHTML = ""

  const openingTime = beachData.settings.openingTime || "08:00"
  const closingTime = beachData.settings.closingTime || "20:00"
  const timeSlotDuration = beachData.settings.timeSlotDuration || 60

  const [openingHour, openingMinute] = openingTime.split(":").map(Number)
  const [closingHour, closingMinute] = closingTime.split(":").map(Number)

  const openingMinutes = openingHour * 60 + openingMinute
  const closingMinutes = closingHour * 60 + closingMinute

  for (let minutes = openingMinutes; minutes < closingMinutes; minutes += timeSlotDuration) {
    const hour = Math.floor(minutes / 60)
    const minute = minutes % 60
    const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

    const startOption = document.createElement("option")
    startOption.value = timeString
    startOption.textContent = timeString
    reservationTimeStart.appendChild(startOption)

    const endOption = document.createElement("option")
    endOption.value = timeString
    endOption.textContent = timeString
    reservationTimeEnd.appendChild(endOption)
  }

  // Add closing time as an option for end time
  const endOption = document.createElement("option")
  endOption.value = closingTime
  endOption.textContent = closingTime
  reservationTimeEnd.appendChild(endOption)

  // Set default values
  reservationTimeStart.value = openingTime
  reservationTimeEnd.value = closingTime
}

// Handle reservation form submit
function handleReservationSubmit(e) {
  e.preventDefault()

  if (!reservationType || !umbrellaSelect || !customerName || !customerPhone) return

  // Get form data
  const type = reservationType.value
  const umbrellaId = umbrellaSelect.value
  const customerNameValue = customerName.value.trim()
  const customerPhoneValue = customerPhone.value.trim()
  const notesValue = reservationNotes ? reservationNotes.value.trim() : ""
  const startTime = reservationTimeStart ? reservationTimeStart.value : ""
  const endTime = reservationTimeEnd ? reservationTimeEnd.value : ""

  // Validate form
  if (!umbrellaId || !customerNameValue || !customerPhoneValue) {
    showToast("Please fill in all required fields", "error")
    return
  }

  if (startTime >= endTime) {
    showToast("End time must be after start time", "error")
    return
  }

  // Create reservation object
  const reservation = {
    id: `res-${Date.now()}`,
    umbrellaId,
    customerName: customerNameValue,
    customerPhone: customerPhoneValue,
    startTime,
    endTime,
    type,
    notes: notesValue,
  }

  if (type === "single") {
    const dateValue = reservationDate ? reservationDate.value : ""
    if (!dateValue) {
      showToast("Please select a date", "error")
      return
    }
    reservation.date = new Date(dateValue)
  } else {
    const startDateValue = subscriptionStart ? subscriptionStart.value : ""
    const endDateValue = subscriptionEnd ? subscriptionEnd.value : ""
    const daysOfWeek = []

    document.querySelectorAll('#subscription-fields input[type="checkbox"]:checked').forEach((checkbox) => {
      daysOfWeek.push(Number.parseInt(checkbox.value))
    })

    if (!startDateValue || !endDateValue) {
      showToast("Please select start and end dates", "error")
      return
    }

    if (daysOfWeek.length === 0) {
      showToast("Please select at least one day of the week", "error")
      return
    }

    reservation.startDate = new Date(startDateValue)
    reservation.endDate = new Date(endDateValue)
    reservation.daysOfWeek = daysOfWeek
  }

  // Check if editing existing reservation
  const reservationId = reservationForm.getAttribute("data-reservation-id")
  if (reservationId) {
    // Update existing reservation
    const index = beachData.reservations.findIndex((r) => r.id === reservationId)
    if (index !== -1) {
      reservation.id = reservationId
      beachData.reservations[index] = reservation
    }
  } else {
    // Add new reservation
    beachData.reservations.push(reservation)
  }

  // Update umbrella status if it's available
  const umbrella = beachData.umbrellas.find((u) => u.id === umbrellaId)
  if (umbrella && umbrella.status === "available") {
    umbrella.status = "reserved"
  }

  // Save data
  saveData()

  // Update views
  renderDashboard()
  renderReservations()
  renderCalendar()

  // Close modal
  closeAllModals()

  // Show success message
  showToast(reservationId ? "Reservation updated successfully" : "Reservation created successfully", "success")

  // Add notification for reservation
  addNotification(
    reservationId 
      ? `Reservation updated for ${reservation.customerName}`
      : `New reservation created for ${reservation.customerName}`,
    'success'
  )
}

// Close all modals
function closeAllModals() {
  if (umbrellaModal) umbrellaModal.classList.remove("active")
  if (reservationModal) reservationModal.classList.remove("active")
  if (reservationForm) reservationForm.removeAttribute("data-reservation-id")
}

// Export to Excel function
function exportToExcel() {
  try {
    // Prepare data for export
    const data = prepareExportData()

    // Create workbook
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(data)

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Reservations")

    // Generate Excel file and download
    const fileName = `BeachEase_Reservations_${new Date().toISOString().slice(0, 10)}.xlsx`
    XLSX.writeFile(wb, fileName)

    showToast("Exported to Excel successfully", "success")
  } catch (error) {
    console.error("Excel export error:", error)
    showToast("Failed to export to Excel", "error")
  }
}

// Export to PDF function
function exportToPDF() {
  try {
    // Prepare data for export
    const data = prepareExportData()

    // Create new PDF document
    const { jsPDF } = window.jspdf
    const doc = new jsPDF()

    // Add title
    doc.setFontSize(18)
    doc.text("BeachEase Reservations Report", 14, 20)

    // Add date
    doc.setFontSize(10)
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 28)

    // Add table
    doc.autoTable({
      head: [["ID", "Umbrella", "Customer", "Date", "Time", "Status"]],
      body: data.map((item) => [item.id, item.umbrella, item.customer, item.date, item.time, item.status]),
      startY: 35,
      styles: {
        fontSize: 8,
        cellPadding: 2,
        overflow: "linebreak",
      },
      headStyles: {
        fillColor: [0, 180, 216],
        textColor: [255, 255, 255],
      },
    })

    // Save PDF
    const fileName = `BeachEase_Reservations_${new Date().toISOString().slice(0, 10)}.pdf`
    doc.save(fileName)

    showToast("Exported to PDF successfully", "success")
  } catch (error) {
    console.error("PDF export error:", error)
    showToast("Failed to export to PDF", "error")
  }
}

// Helper function to prepare data for export
function prepareExportData() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return beachData.reservations.map((reservation) => {
    const umbrella = beachData.umbrellas.find((u) => u.id === reservation.umbrellaId)
    const umbrellaNumber = umbrella ? `#${umbrella.number}` : "Unknown"

    let dateDisplay = ""
    let isActive = false

    if (reservation.type === "single") {
      const resDate = new Date(reservation.date)
      resDate.setHours(0, 0, 0, 0)
      dateDisplay = resDate.toLocaleDateString()
      isActive = resDate.getTime() === today.getTime()
    } else {
      const startDate = new Date(reservation.startDate)
      const endDate = new Date(reservation.endDate)
      startDate.setHours(0, 0, 0, 0)
      endDate.setHours(0, 0, 0, 0)

      dateDisplay = `${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`

      if (today >= startDate && today <= endDate) {
        isActive = reservation.daysOfWeek.includes(today.getDay())
      }
    }

    return {
      id: reservation.id,
      umbrella: umbrellaNumber,
      customer: reservation.customerName,
      phone: reservation.customerPhone,
      date: dateDisplay,
      time: `${reservation.startTime} - ${reservation.endTime}`,
      type: reservation.type === "single" ? "Single Day" : "Subscription",
      status: isActive ? "Active" : "Scheduled",
      notes: reservation.notes || "",
    }
  })
}

// Format date for display
function formatDate(date) {
  if (!date) return ""
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

// Format date for input fields
function formatDateForInput(date) {
  if (!date) return ""
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}`
}

// Dashboard shutdown functionality
function showPopup() {
  const popupOverlay = document.getElementById("popup-overlay")
  if (popupOverlay) {
    popupOverlay.style.display = "flex"
  }
}

function unlockDashboard() {
  const code = document.getElementById("unlock-code")
  const errorMessage = document.getElementById("error-message")
  const popupOverlay = document.getElementById("popup-overlay")

  if (code && code.value === "1234") {
    // Example unlock code
    if (popupOverlay) popupOverlay.style.display = "none"
    if (errorMessage) errorMessage.textContent = ""
    if (code) code.value = ""
  } else {
    if (errorMessage) errorMessage.textContent = "Invalid code. Please try again."
  }
}

// Password strength checker
function checkPasswordStrength(password) {
  let strength = 0
  const checks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    numbers: /\d/.test(password),
    symbols: /[^A-Za-z0-9]/.test(password),
  }

  strength = Object.values(checks).filter(Boolean).length

  const strengthBar = document.getElementById("passwordStrengthBar")
  if (strengthBar) {
    const percentage = (strength / 5) * 100
    strengthBar.style.width = `${percentage}%`

    if (strength < 2) {
      strengthBar.style.backgroundColor = "#ef4444"
    } else if (strength < 4) {
      strengthBar.style.backgroundColor = "#f59e0b"
    } else {
      strengthBar.style.backgroundColor = "#10b981"
    }
  }

  return strength
}

// Setup password strength checking
if (signupPassword) {
  signupPassword.addEventListener("input", (e) => {
    checkPasswordStrength(e.target.value)
  })
}

// Logo Upload Functionality
function setupLogoUpload() {
  const logoUpload = document.getElementById("logo-upload")
  const logoPreview = document.getElementById("logo-preview")
  const logoImage = document.getElementById("logo-image")
  const removeLogoBtn = document.getElementById("remove-logo")
  const logoMain = document.getElementById("logo-main") // Main logo display

  // Handle logo upload
  logoUpload.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        // Update preview image
        logoImage.src = e.target.result
        logoPreview.style.display = "block"

        // Update main logo display if exists
        if (logoMain) {
          logoMain.src = e.target.result
        }

        // Save to localStorage
        localStorage.setItem("beachLogo", e.target.result)

        showToast("Logo uploaded successfully!", "success")
      }

      reader.readAsDataURL(file)
    }
  })

  // Handle logo removal
  removeLogoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()

    // Reset the file input
    logoUpload.value = ""

    // Hide preview
    logoPreview.style.display = "none"

    // Reset to default/placeholder
    logoImage.src = "/placeholder.svg"

    // Update main logo display if exists
    if (logoMain) {
      logoMain.src = ""
    }

    // Remove from localStorage
    localStorage.removeItem("beachLogo")

    showToast("Logo removed successfully!", "success")
  })

  // Load saved logo on page load
  document.addEventListener("DOMContentLoaded", () => {
    const savedLogo = localStorage.getItem("beachLogo")
    if (savedLogo) {
      logoImage.src = savedLogo
      logoPreview.style.display = "block"

      // Update main logo display if exists
      if (logoMain) {
        logoMain.src = savedLogo
      }
    }
  })
}

// Initialize notifications
function initNotifications() {
  // Load notifications from localStorage if available
  const savedNotifications = localStorage.getItem('beachManagerNotifications')
  if (savedNotifications) {
    notifications = JSON.parse(savedNotifications)
  }
  updateNotificationBadge()
}

// Add notification
function addNotification(message, type = 'info') {
  const notification = {
    id: Date.now(),
    message,
    type,
    timestamp: new Date(),
    read: false
  }
  notifications.unshift(notification)
  saveNotifications()
  updateNotificationBadge()
}

// Save notifications to localStorage
function saveNotifications() {
  localStorage.setItem('beachManagerNotifications', JSON.stringify(notifications))
}

// Update notification badge
function updateNotificationBadge() {
  const unreadCount = notifications.filter(n => !n.read).length
  if (notificationBadge) {
    notificationBadge.textContent = unreadCount
    notificationBadge.style.display = unreadCount > 0 ? 'flex' : 'none'
  }
}

// Show notifications dropdown
function toggleNotificationsDropdown() {
  const existingDropdown = document.querySelector('.notifications-dropdown')
  if (existingDropdown) {
    existingDropdown.remove()
    return
  }

  const dropdown = document.createElement('div')
  dropdown.className = 'notifications-dropdown'
  
  if (notifications.length === 0) {
    dropdown.innerHTML = `
      <div class="notification-item empty">
        <p>No notifications</p>
      </div>
    `
  } else {
    dropdown.innerHTML = `
      <div class="notifications-header">
        <h4>Notifications</h4>
        <button class="clear-all">Clear All</button>
      </div>
      <div class="notifications-list">
        ${notifications.map(notification => `
          <div class="notification-item ${notification.read ? 'read' : ''}" data-id="${notification.id}">
            <div class="notification-icon">
              <i class="fas ${getNotificationIcon(notification.type)}"></i>
            </div>
            <div class="notification-content">
              <p>${notification.message}</p>
              <span class="notification-time">${formatNotificationTime(notification.timestamp)}</span>
            </div>
            <button class="delete-notification" data-id="${notification.id}">
              <i class="fas fa-times"></i>
            </button>
          </div>
        `).join('')}
      </div>
    `
  }

  notificationsContainer.appendChild(dropdown)

  // Add event listeners
  const clearAllBtn = dropdown.querySelector('.clear-all')
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAllNotifications)
  }

  dropdown.querySelectorAll('.notification-item').forEach(item => {
    if (!item.classList.contains('empty')) {
      item.addEventListener('click', () => markNotificationAsRead(item.dataset.id))
    }
  })

  dropdown.querySelectorAll('.delete-notification').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      deleteNotification(btn.dataset.id)
    })
  })

  // Mark all as read when opening dropdown
  markAllNotificationsAsRead()
}

// Get notification icon based on type
function getNotificationIcon(type) {
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  }
  return icons[type] || icons.info
}

// Format notification time
function formatNotificationTime(timestamp) {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInMinutes = Math.floor((now - date) / (1000 * 60))
  
  if (diffInMinutes < 1) return 'Just now'
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
  return date.toLocaleDateString()
}

// Mark notification as read
function markNotificationAsRead(id) {
  const notification = notifications.find(n => n.id.toString() === id.toString())
  if (notification) {
    notification.read = true
    saveNotifications()
    updateNotificationBadge()
  }
}

// Mark all notifications as read
function markAllNotificationsAsRead() {
  notifications.forEach(notification => {
    notification.read = true
  })
  saveNotifications()
  updateNotificationBadge()
}

// Delete notification
function deleteNotification(id) {
  notifications = notifications.filter(n => n.id.toString() !== id.toString())
  saveNotifications()
  updateNotificationBadge()
  toggleNotificationsDropdown() // Refresh dropdown
}

// Clear all notifications
function clearAllNotifications() {
  notifications = []
  saveNotifications()
  updateNotificationBadge()
  toggleNotificationsDropdown() // Refresh dropdown
}

// Initialize the application
document.addEventListener("DOMContentLoaded", initApp)

// Make functions globally available for HTML onclick handlers
window.showPopup = showPopup
window.unlockDashboard = unlockDashboard

// Update maintenance status changes
function setMaintenanceStatus(umbrellaId, isInMaintenance) {
  const umbrella = beachData.umbrellas.find(u => u.id === umbrellaId)
  if (umbrella) {
    umbrella.status = isInMaintenance ? 'maintenance' : 'available'
    saveData()
    renderDashboard()
    addNotification(
      `Umbrella #${umbrella.number} ${isInMaintenance ? 'marked for maintenance' : 'maintenance completed'}`,
      isInMaintenance ? 'warning' : 'success'
    )
  }
}

// Go to today's date in calendar
function goToToday() {
  const today = new Date()
  currentMonth = today.getMonth()
  currentYear = today.getFullYear()
  renderCalendar()
}