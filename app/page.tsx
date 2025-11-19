"use client";

import { useEffect, useState, useRef } from "react";

interface ComponentDetail {
  id: string;
  name: string;
  position: { x: number; y: number };
  description: string;
  specs: string[];
  color: string;
}

const components: ComponentDetail[] = [
  {
    id: "stm32",
    name: "STM32F401CCU6",
    position: { x: 30, y: 25 },
    description:
      "Main microcontroller running at 84MHz with FreeRTOS for real-time multi-tasking",
    specs: ["ARM Cortex-M4", "256KB Flash", "64KB RAM", "12-bit ADC"],
    color: "#AD769F",
  },
  {
    id: "esp8266",
    name: "ESP8266 WiFi",
    position: { x: 70, y: 20 },
    description: "WiFi module for cloud connectivity via MQTT protocol",
    specs: ["802.11 b/g/n", "MQTT Client", "AT Commands", "2s Telemetry"],
    color: "#7CA765",
  },
  {
    id: "bme280",
    name: "BME280 Sensor",
    position: { x: 50, y: 45 },
    description:
      "Environmental sensor measuring temperature, pressure, and humidity",
    specs: ["±1.0°C accuracy", "300-1100 hPa", "±3% RH", "I2C: 0x76"],
    color: "#AD769F",
  },
  {
    id: "ds18b20",
    name: "DS18B20 (3x)",
    position: { x: 25, y: 60 },
    description: "Three 1-Wire soil temperature sensors for zone monitoring",
    specs: ["12-bit resolution", "0.0625°C", "Waterproof probe", "PA5/6/7"],
    color: "#7CA765",
  },
  {
    id: "moisture",
    name: "Soil Moisture (3x)",
    position: { x: 70, y: 55 },
    description: "Capacitive soil moisture sensors with analog output",
    specs: ["0-100% range", "Non-corrosive", "12-bit ADC", "PB0/1, PA4"],
    color: "#AD769F",
  },
  {
    id: "water",
    name: "Water Level (2x)",
    position: { x: 50, y: 75 },
    description: "Analog water level sensors for tank monitoring",
    specs: ["0-3.3V output", "Auto pump trigger", ">50% threshold", "PA0/1"],
    color: "#7CA765",
  },
  {
    id: "relay",
    name: "5-Ch Relay Module",
    position: { x: 20, y: 85 },
    description: "12V relay board controlling pumps and solenoid valves",
    specs: ["2x Water pumps", "3x Solenoid valves", "Active-LOW", "10A rating"],
    color: "#893B67",
  },
  {
    id: "power",
    name: "Power Supply",
    position: { x: 75, y: 85 },
    description: "Multi-voltage power distribution with protection circuits",
    specs: [
      "5V/2A for MCU",
      "12V/5A actuators",
      "Buck converter",
      "Fuse protected",
    ],
    color: "#893B67",
  },
];

export default function ExpoDoc() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#3B192B] text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#3B192B]/95 backdrop-blur-md border-b border-[#AD769F]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#AD769F] to-[#7CA765] bg-clip-text text-transparent">
              H.A.R.V.E.S.T. System
            </h1>
            <p className="text-xs text-white/70 mt-1">
              Humidity-based And Regulation for Vegetation, Environment, Soil,
              and Temperature
            </p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a
              href="#product"
              className="text-white/80 hover:text-[#7CA765] transition-colors"
            >
              Product
            </a>
            <a
              href="#specs"
              className="text-white/80 hover:text-[#7CA765] transition-colors"
            >
              Specs
            </a>
            <a
              href="#architecture"
              className="text-white/80 hover:text-[#7CA765] transition-colors"
            >
              Architecture
            </a>
            <a
              href="https://github.com/AdakHaddad/capdash"
              className="text-[#7CA765] hover:text-[#AD769F] transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Device Showcase */}
      <section
        id="product"
        className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#893B67]/20 via-transparent to-[#7CA765]/10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Device Image */}
          <div className="relative">
            <div
              className="relative transition-transform duration-700"
              style={{
                transform: `perspective(1000px) rotateY(${scrollY * 0.02}deg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#AD769F]/20 to-[#7CA765]/20 blur-3xl rounded-full"></div>
              <img
                src="/pcb_and_relay.png"
                alt="H.A.R.V.E.S.T. System Device"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -right-4 top-1/4 bg-[#3B192B]/90 border border-[#AD769F]/40 rounded-xl px-4 py-3 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#7CA765]">8</div>
              <div className="text-xs text-white/70">Sensor Types</div>
            </div>
            <div className="absolute -left-4 bottom-1/4 bg-[#3B192B]/90 border border-[#7CA765]/40 rounded-xl px-4 py-3 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#AD769F]">5</div>
              <div className="text-xs text-white/70">Actuators</div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <div className="inline-block bg-[#893B67]/30 border border-[#AD769F]/40 rounded-full px-4 py-1 text-sm text-[#7CA765] mb-4">
              Smart Agriculture IoT Platform
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#AD769F] via-[#7CA765] to-[#AD769F] bg-clip-text text-transparent">
                Autonomous Irrigation
              </span>
              <br />
              <span className="text-white/90">Controlled Intelligence</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              The H.A.R.V.E.S.T. System combines STM32F401 processing power with
              ESP8266 connectivity, delivering real-time environmental
              monitoring and adaptive irrigation control through multi-sensor
              fusion and MQTT telemetry.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#893B67]/20 border border-[#AD769F]/30 rounded-lg p-4">
                <div className="text-sm text-white/60 mb-1">Processor</div>
                <div className="text-xl font-bold text-[#AD769F]">
                  STM32F401
                </div>
                <div className="text-xs text-white/70">84MHz Cortex-M4</div>
              </div>
              <div className="bg-[#893B67]/20 border border-[#7CA765]/30 rounded-lg p-4">
                <div className="text-sm text-white/60 mb-1">Connectivity</div>
                <div className="text-xl font-bold text-[#7CA765]">ESP8266</div>
                <div className="text-xs text-white/70">WiFi + MQTT</div>
              </div>
              <div className="bg-[#893B67]/20 border border-[#AD769F]/30 rounded-lg p-4">
                <div className="text-sm text-white/60 mb-1">RTOS</div>
                <div className="text-xl font-bold text-[#AD769F]">FreeRTOS</div>
                <div className="text-xs text-white/70">Real-time Tasks</div>
              </div>
              <div className="bg-[#893B67]/20 border border-[#7CA765]/30 rounded-lg p-4">
                <div className="text-sm text-white/60 mb-1">Update Rate</div>
                <div className="text-xl font-bold text-[#7CA765]">
                  2 seconds
                </div>
                <div className="text-xs text-white/70">Telemetry</div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#specs"
                className="bg-gradient-to-r from-[#AD769F] to-[#7CA765] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7CA765]/30 transition-all"
              >
                View Components
              </a>
              <a
                href="https://bawang-capstone.netlify.app"
                className="border border-[#AD769F]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#893B67]/30 transition-all"
              >
                Live Dashboard
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Component Detail Section */}
      <section
        id="specs"
        className="min-h-screen bg-gradient-to-b from-[#3B192B] to-[#893B67]/50 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#AD769F] to-[#7CA765] bg-clip-text text-transparent">
              System Components
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Hover over the board to explore each module and its specifications
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
            {/* Left Component List */}
            <div className="space-y-4">
              {components.slice(0, 4).map((comp, index) => (
                <div
                  key={comp.id}
                  className={`bg-[#3B192B]/70 border rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                    activeComponent === comp.id
                      ? "border-2 shadow-lg scale-105"
                      : "border-[#893B67]/40 hover:border-[#AD769F]/40"
                  }`}
                  style={{
                    borderColor:
                      activeComponent === comp.id ? comp.color : undefined,
                    boxShadow:
                      activeComponent === comp.id
                        ? `0 0 30px ${comp.color}40`
                        : undefined,
                  }}
                  onMouseEnter={() => setActiveComponent(comp.id)}
                  onMouseLeave={() => setActiveComponent(null)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm"
                      style={{
                        backgroundColor: `${comp.color}40`,
                        color: comp.color,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{ color: comp.color }}
                      >
                        {comp.name}
                      </h3>
                      <p className="text-white/70 text-xs mb-2">
                        {comp.description}
                      </p>
                      <div className="space-y-1">
                        {comp.specs.map((spec, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1 text-xs text-white/60"
                          >
                            <svg
                              className="w-3 h-3 flex-shrink-0"
                              style={{ color: comp.color }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center: PCB Image with Hotspots */}
            <div className="sticky top-24">
              <div className="relative bg-[#3B192B]/50 border border-[#AD769F]/30 rounded-2xl p-8">
                <img
                  src="/pcb.png"
                  alt="H.A.R.V.E.S.T. PCB Layout"
                  className="w-full h-auto rounded-lg"
                />

                {/* Interactive Hotspots */}
                {components.map((comp) => (
                  <button
                    key={comp.id}
                    className="absolute w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-125"
                    style={{
                      left: `${comp.position.x}%`,
                      top: `${comp.position.y}%`,
                      borderColor: comp.color,
                      backgroundColor:
                        activeComponent === comp.id
                          ? comp.color
                          : "transparent",
                      boxShadow:
                        activeComponent === comp.id
                          ? `0 0 20px ${comp.color}`
                          : "none",
                    }}
                    onMouseEnter={() => setActiveComponent(comp.id)}
                    onMouseLeave={() => setActiveComponent(null)}
                  >
                    <span
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping"
                      style={{ backgroundColor: comp.color }}
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Component List */}
            <div className="space-y-4">
              {components.slice(4, 8).map((comp, index) => (
                <div
                  key={comp.id}
                  className={`bg-[#3B192B]/70 border rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                    activeComponent === comp.id
                      ? "border-2 shadow-lg scale-105"
                      : "border-[#893B67]/40 hover:border-[#AD769F]/40"
                  }`}
                  style={{
                    borderColor:
                      activeComponent === comp.id ? comp.color : undefined,
                    boxShadow:
                      activeComponent === comp.id
                        ? `0 0 30px ${comp.color}40`
                        : undefined,
                  }}
                  onMouseEnter={() => setActiveComponent(comp.id)}
                  onMouseLeave={() => setActiveComponent(null)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm"
                      style={{
                        backgroundColor: `${comp.color}40`,
                        color: comp.color,
                      }}
                    >
                      {index + 5}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{ color: comp.color }}
                      >
                        {comp.name}
                      </h3>
                      <p className="text-white/70 text-xs mb-2">
                        {comp.description}
                      </p>
                      <div className="space-y-1">
                        {comp.specs.map((spec, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1 text-xs text-white/60"
                          >
                            <svg
                              className="w-3 h-3 flex-shrink-0"
                              style={{ color: comp.color }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section
        id="architecture"
        className="min-h-screen bg-[#3B192B] py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#AD769F] to-[#7CA765] bg-clip-text text-transparent">
            System Architecture
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-[#893B67]/40 to-[#893B67]/20 border border-[#AD769F]/30 rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-[#AD769F] mb-3">
                FreeRTOS Tasks
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• task_wifi: MQTT communication</li>
                <li>• task_sensor: Data acquisition</li>
                <li>• defaultTask: System heartbeat</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#893B67]/40 to-[#893B67]/20 border border-[#7CA765]/30 rounded-xl p-6">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-bold text-[#7CA765] mb-3">
                MQTT Protocol
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Broker: broker.mqtt.cool</li>
                <li>• Telemetry: d02/telemetry</li>
                <li>• Commands: d02/cmd</li>
                <li>• QoS: 0 (fire and forget)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#893B67]/40 to-[#893B67]/20 border border-[#AD769F]/30 rounded-xl p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-[#AD769F] mb-3">
                Control Modes
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• AUTO: Sensor-driven</li>
                <li>• POMPA: Manual irrigation</li>
                <li>• SEDOT: Water transfer</li>
                <li>• STOP: Emergency shutoff</li>
              </ul>
            </div>
          </div>

          {/* Data Flow */}
          <div className="bg-[#893B67]/20 border border-[#AD769F]/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#7CA765] mb-6 text-center">
              Data Flow Pipeline
            </h3>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {["Sensors", "STM32", "ESP8266", "MQTT", "Dashboard"].map(
                (step, i, arr) => (
                  <div key={step} className="flex items-center">
                    <div className="bg-gradient-to-r from-[#AD769F] to-[#7CA765] px-6 py-3 rounded-lg font-semibold">
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <svg
                        className="w-8 h-8 mx-2 text-[#7CA765]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B192B] border-t border-[#AD769F]/30 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/70 mb-4">
            Built with STM32F401, ESP8266, FreeRTOS, and Next.js
          </p>
          <div className="flex justify-center gap-6 text-sm text-[#7CA765]">
            <a
              href="https://github.com/AdakHaddad/capdash"
              className="hover:text-[#AD769F] transition-colors"
            >
              GitHub Repository
            </a>
            <span className="text-[#893B67]">|</span>
            <a href="https://bawang-capstone.netlify.app" className="hover:text-[#AD769F] transition-colors">
              Live Dashboard
            </a>
            <span className="text-[#893B67]">|</span>
            <a
              href="/expodoc"
              className="hover:text-[#AD769F] transition-colors"
            >
              Documentation
            </a>
          </div>
          <p className="text-xs text-white/50 mt-6">
            © 2025 H.A.R.V.E.S.T. IoT Irrigation System. Open Source Project.
          </p>
        </div>
      </footer>
    </div>
  );
}
