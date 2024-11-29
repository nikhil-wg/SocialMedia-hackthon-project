import json
import sys

def process_metrics(metrics):
    total_reach = sum(metric['reach'] for metric in metrics)
    average_reach = total_reach / len(metrics) if metrics else 0
    return {
        "total_reach": total_reach,
        "average_reach": average_reach,
        "platforms": len(metrics)
    }

if __name__ == "__main__":
    metrics_json = sys.stdin.read()
    metrics = json.loads(metrics_json)
    results = process_metrics(metrics)
    print(json.dumps(results))
