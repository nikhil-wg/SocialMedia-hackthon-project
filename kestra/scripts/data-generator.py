import random
import json
import sys

def generate_data(platforms):
    data = [{"platform": platform, "reach": random.randint(100, 1000)} for platform in platforms]
    return data

if __name__ == "__main__":
    platforms = sys.argv[1:]  # Platforms passed as command-line arguments
    data = generate_data(platforms)
    print(json.dumps(data))
