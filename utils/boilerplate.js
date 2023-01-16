const code = {
  c: `#include <stdio.h>
int main() {
    // Write C code here
    printf("Hello world");
return 0;
}`,
  cpp: `#include <iostream>
int main() {
    // Write C++ code here
    std::cout << "Hello world!";

    return 0;
}`,
  py: `print("Hello world")`,
  java: `class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  js: `console.log("Hello, World")`,
}
export const boilerplate = (lang) => {
  if (code[lang]) return code[lang]
  throw "Boilerplate not available in the specified language"
}
