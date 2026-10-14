import {
  BadgeCheck,
  ChartNoAxesColumn,
  Gem,
  Heart,
  Leaf,
  MapPin,
  Salad,
  Scale,
  Smile,
  Sprout,
  Star,
  Truck,
  Users,
  type LucideProps,
} from "lucide-react";

const icons = {
  badge: BadgeCheck,
  chart: ChartNoAxesColumn,
  gem: Gem,
  heart: Heart,
  leaf: Leaf,
  pin: MapPin,
  salad: Salad,
  scale: Scale,
  smile: Smile,
  sprout: Sprout,
  star: Star,
  truck: Truck,
  users: Users,
};

export type IconName = keyof typeof icons;

type IconProps = LucideProps & { name: IconName };

export default function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" {...props} />;
}
