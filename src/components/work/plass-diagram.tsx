import { ArrowDown, ArrowRight } from "lucide-react";

const rideSteps = [
  { actor: "Passenger app", action: "Requests a ride" },
  { actor: "Backend", action: "Dispatches the nearest available driver" },
  { actor: "Driver app", action: "Accepts the trip" },
  { actor: "Both apps", action: "Live tracking and trip states in real time" },
];

const architecture = [
  {
    version: "v1",
    label: "Fast launch",
    stack: ["GetX", "MVC", "Firebase"],
  },
  {
    version: "v2",
    label: "Dedicated backend",
    stack: ["Riverpod", "Clean Architecture", "Dio", "Pusher WebSockets"],
  },
];

function FlowArrow() {
  return (
    <div className="flex justify-center self-center text-zinc-600">
      <ArrowDown className="size-4 md:hidden" />
      <ArrowRight className="size-4 hidden md:block" />
    </div>
  );
}

export function PlassDiagram() {
  return (
    <figure className="space-y-8">
      <div>
        <h4 className="text-sm font-medium text-zinc-500">
          Ride flow
        </h4>

        <ol className="mt-3 grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
          {rideSteps.map((step, index) => (
            <li key={step.actor} className="contents">
              {index > 0 && <FlowArrow />}

              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <p className="text-xs text-zinc-500">
                  {index + 1}. {step.actor}
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  {step.action}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h4 className="text-sm font-medium text-zinc-500">
          Architecture evolution
        </h4>

        <div className="mt-3 grid gap-2 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          {architecture.map((stage, index) => (
            <div key={stage.version} className="contents">
              {index > 0 && <FlowArrow />}

              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <p className="text-xs text-zinc-500">
                  {stage.version} · {stage.label}
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  {stage.stack.join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <figcaption className="text-xs text-zinc-600">
        Diagram of the passenger and driver apps. The service is no longer
        available, so there are no public screenshots.
      </figcaption>
    </figure>
  );
}
