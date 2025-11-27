# 🎯 Tray - A Minimal Kanban Board

<div align="center">
  <img src="./assets/app_logo/logo-sqr.jpg" alt="Tray Logo" width="120" height="120" style="border-radius: 12px;">
  <h3>A beautifully crafted, minimal Kanban board for productivity enthusiasts</h3>
</div>

---

<img width="1916" height="970" alt="Screenshot 2025-11-27 at 11 07 14 AM" src="https://github.com/user-attachments/assets/722c56ae-763e-442f-aa3f-1c04e34f69bb" />

## ✨ Features

- 🎨 **Clean & Minimal Design** - Focus on what matters most
- 🚀 **Drag & Drop Interface** - Intuitive task management
- 📝 **Dynamic Task Creation** - Add tasks with title and description
- 💾 **Local Storage** - Your tasks persist between sessions
- 📊 **Real-time Counters** - Track tasks in each column
- 🎯 **Three-Column Layout** - To-Do, In Progress, Completed
- 📱 **Mobile Aware** - Graceful mobile experience message
- ⚡ **Fast & Responsive** - Built with modern web technologies

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS v4.1.17
- **Icons**: Remix Icons
- **Storage**: Browser LocalStorage
- **Build**: Tailwind CLI

## 🚀 Quick Start

### Prerequisites
- Node.js (for development)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Tray
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS (if making style changes)**
   ```bash
   npx tailwindcss -i input.css -o output.css --watch
   ```

4. **Open the application**
   - Simply open `index.html` in your browser
   - Or use a local server like Live Server in VS Code

## 📋 Usage

### Adding Tasks
1. Click the **"Add Task"** button
2. Fill in the task title (required) and description (optional)
3. Press **Enter** or click **"Add"**
4. Task appears in the **To-Do** column

### Managing Tasks
- **Drag & Drop**: Move tasks between columns
- **Progress Tracking**: Watch counters update automatically
- **Persistence**: Tasks save automatically and restore on page reload

### Columns
- **📝 To-Do**: Tasks that need to be started
- **⚡ In Progress**: Tasks currently being worked on
- **✅ Completed**: Finished tasks

## 🎨 Design Philosophy

Tray embraces minimalism without sacrificing functionality. The design focuses on:
- **Clarity**: Clean typography and spacious layout
- **Efficiency**: Intuitive drag-and-drop workflow
- **Consistency**: Uniform design language throughout
- **Accessibility**: Semantic HTML and keyboard navigation

## 📱 Device Support

- ✅ **Desktop**: Full functionality (Windows, macOS, Linux)
- ✅ **Laptop**: Optimized experience
- ⏳ **Mobile/Tablet**: Coming soon (currently shows informative message)

## 🔧 Project Structure

```
Tray/
├── 📄 index.html          # Main HTML file
├── 🎨 input.css           # Tailwind input styles
├── 📦 output.css          # Compiled CSS
├── ⚡ script.js           # JavaScript functionality
├── 📦 package.json        # Dependencies
├── 🏞️  assets/            # Images and logos
│   └── app_logo/
│       ├── logo-sqr.jpg
│       └── logo-circ.png
└── 📖 README.md           # This file
```

## 🎯 Key Features Deep Dive

### Drag & Drop System
- **Event-driven architecture** with proper event delegation
- **Visual feedback** with hover states and animations
- **Cross-column compatibility** - drop in any column

### Data Persistence
- **LocalStorage integration** for offline functionality
- **Real-time sync** between UI and storage
- **Data integrity** with proper serialization

### Responsive Design
- **Tailwind CSS** for consistent styling
- **Custom CSS properties** for theming
- **Mobile-first approach** with desktop optimization

## 🚧 Roadmap

- [ ] 📱 Mobile & tablet optimization
- [ ] 🌙 Dark/Light theme toggle
- [ ] 🏷️ Task categories and tags
- [ ] 📅 Due dates and reminders
- [ ] 👥 Multi-user collaboration
- [ ] 📊 Analytics and reporting
- [ ] 🔄 Cloud synchronization
- [ ] 📱 Progressive Web App (PWA)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests
- 📝 Improve documentation

## 👨‍💻 Author

**Rajbeer Saha**
- 🌐 Designed & Developed with ❤️
- 📧 Contact: [Your Email]
- 🔗 Portfolio: [Your Portfolio URL]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Made with ❤️ and ☕ by Rajbeer Saha</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
