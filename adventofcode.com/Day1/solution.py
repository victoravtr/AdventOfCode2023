import re

def get_input():
    input_file = "input"
    with open(input_file, "r") as f:
        return f.read().splitlines()

def get_number(digits):
    if len(digits) == 0:
        number = 0
    elif len(digits) == 1:
        number = int(digits + digits)
    else:
        number = int(digits[0] + digits[-1])
    return number

def part1(file_content):
    numbers = []
    for line in file_content:
        digits = re.sub(r'\D', '', line)
        numbers.append(get_number(digits))
    return sum(numbers)

def main():
    file_content = get_input()
    print(part1(file_content))

if __name__ == "__main__":
    main()


