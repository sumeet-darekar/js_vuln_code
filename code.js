#include <iostream>
#include <cstring>

// Function to copy user input into a buffer
void vulnerableFunction(const char* input) {
    char buffer[64]; // Fixed-size buffer
    strcpy(buffer, input); // Unsafe copy: No bounds checking
    std::cout << "Buffer content: " << buffer << std::endl;
}

int main() {
    char userInput[256];
    std::cout << "Enter your input: ";
    std::cin >> userInput; // Unsafe input: No length validation

    // Call the vulnerable function
    vulnerableFunction(userInput);

    return 0;
}
