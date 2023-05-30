# React Portfolio [maximiliangaber.dev](https://maximiliangaber.dev)

Welcome to my React Portfolio! This is a simple guide to help you get started with the project.

## Installation

To install the project dependencies, run the following command in the project's root directory:

```bash
npm install
```

## Configuration

Before running the project, you need to configure some environment variables. Follow these steps:

1. Open the `.env` file in a text editor, which is located in the root directory.
2. Fill in the necessary IDs for `emailjs` in the following format:

   ```bash
   REACT_APP_SERVICE_ID='YOUR_SERVICE_ID'
   REACT_APP_TEMPLATE_ID='YOUR_TEMPLATE_ID'
   REACT_APP_USER_ID='YOUR_USER_ID'
   ```

Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_USER_ID` with the actual IDs from `emailjs` obtained 
for the services used in the project.

## Usage

To start the development server and run the project, use the following command:

```bash
npm start
```

This will start the project locally, and you can access it in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or
submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.
