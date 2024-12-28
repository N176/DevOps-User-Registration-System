# DevOps User Registration System

A containerized Node.js application demonstrating modern DevOps practices including CI/CD, containerization, monitoring, and logging.

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF)

## 🚀 Features

- **Containerization**
  - Docker and Docker Compose setup
  - Multi-stage builds
  - Volume management for data persistence

- **CI/CD Pipeline**
  - Automated testing
  - Docker image building
  - GitHub Actions workflow

- **Monitoring & Logging**
  - Structured logging with Winston
  - Request/Response logging
  - Performance monitoring

- **Database**
  - MySQL with Docker
  - Data persistence
  - Migration support

## 🛠️ Tech Stack

- Node.js & Express
- MySQL
- Docker & Docker Compose
- GitHub Actions
- Winston Logger
- EJS Templates

## 📋 Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/devops-user-registration.git
   cd devops-user-registration
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Update environment variables as needed
   ```

3. **Run with Docker**
   ```bash
   npm run docker:run
   ```

   Or run locally:
   ```bash
   npm install
   npm run dev
   ```

## 🐳 Docker Commands

```bash
# Build and run containers
npm run docker:run

# Stop containers
npm run docker:stop

# Build image only
npm run docker:build
```

## 📊 Monitoring & Logs

- Access logs in `combined.log` and `error.log`
- Request metrics logged for each API call
- Performance monitoring through request duration tracking

## 🔄 CI/CD Pipeline

The GitHub Actions workflow includes:
1. Code checkout
2. Node.js setup
3. Dependencies installation
4. Test execution
5. Docker image building

## 🧪 Testing

```bash
# Run tests
npm test
```

## 📁 Project Structure

```
.
├── .github/workflows      # CI/CD configuration
├── src/
│   ├── config/           # App configuration
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Express middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── views/           # EJS templates
├── tests/               # Test files
├── Dockerfile          # Container configuration
├── docker-compose.yml  # Multi-container setup
└── package.json       # Project dependencies
```

## 🔐 Security

- Environment variable management
- Docker security best practices
- Request logging for audit trails

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)