import re

def get_input():
    input_file = "input"
    with open(input_file, "r", encoding="utf-8") as f:
        return f.read().splitlines()

def parse_id(line):
    game_id = re.search(r"Game (\d+):", line).group(1)
    return int(game_id)

def parse_balls(line):
    red_balls = re.findall(r"(\d+) red", line)
    red_balls = list(map(int, red_balls))
    green_balls = re.findall(r"(\d+) green", line)
    green_balls = list(map(int, green_balls))
    blue_balls = re.findall(r"(\d+) blue", line)
    blue_balls = list(map(int, blue_balls))
    return red_balls, green_balls, blue_balls

def part1(file_content):
    bag_content = { "red": 12, "green": 13, "blue": 14 }
    id_sum = 0
    for line in file_content:
        game_id = parse_id(line)
        red_balls, green_balls, blue_balls = parse_balls(line)
        if max(red_balls) <= bag_content["red"] and max(green_balls) <= bag_content["green"] and max(blue_balls) <= bag_content["blue"]:
            id_sum += game_id
    return id_sum

def part2(file_content):
    total_sum = 0
    for line in file_content:
        red_balls, green_balls, blue_balls = parse_balls(line)
        total_sum += (max(red_balls) * max(green_balls) * max(blue_balls))
    return total_sum

def main():
    file_content = get_input()
    print(part1(file_content))
    print(part2(file_content))

if __name__ == "__main__":
    main()