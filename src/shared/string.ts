import { Calendar, CreditCard, MapPin, Shield, Trash2, Truck } from "lucide-react";

export const processSteps = [
  { id: 1, name: "Postcode", icon: MapPin, completed: true },
  { id: 2, name: "Waste Type", icon: Trash2, completed: true },
  { id: 3, name: "Select Skip", icon: Truck, completed: false, current: true },
  { id: 4, name: "Permit Check", icon: Shield, completed: false },
  { id: 5, name: "Choose Date", icon: Calendar, completed: false },
  { id: 6, name: "Payment", icon: CreditCard, completed: false },
];