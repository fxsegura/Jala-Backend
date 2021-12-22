export interface IDevice {
    turnOn(): void;
    turnOff(): void;
    getStatus(): boolean;
}
