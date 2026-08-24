import {
  Landmark, Cpu, Map, Droplets, Gavel, TrendingUp, HardHat, Ruler, Scale, Eye,
  Shield, Users, Building2, Leaf, Anchor, HeartHandshake, Banknote, FileText,
  CheckCircle2, ArrowRight, ArrowUpRight, Mail, Phone, MapPin, Clock,
  Menu, X, ChevronDown, ChevronRight, Quote,
  ShieldCheck, Target, Compass, Sparkles, Download, ExternalLink, Send,
} from 'lucide-react'

const MAP = {
  landmark: Landmark, cpu: Cpu, map: Map, droplets: Droplets, gavel: Gavel,
  'trending-up': TrendingUp, 'hard-hat': HardHat, ruler: Ruler, scale: Scale,
  eye: Eye, shield: Shield, users: Users, 'building-2': Building2, leaf: Leaf,
  anchor: Anchor, 'heart-handshake': HeartHandshake, banknote: Banknote,
  'file-text': FileText, check: CheckCircle2, 'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight, mail: Mail, phone: Phone, 'map-pin': MapPin,
  clock: Clock, menu: Menu, x: X, 'chevron-down': ChevronDown,
  'chevron-right': ChevronRight, quote: Quote, 'shield-check': ShieldCheck,
  target: Target, compass: Compass, sparkles: Sparkles, download: Download,
  'external-link': ExternalLink, send: Send,
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.6, ...rest }) {
  const C = MAP[name] || Compass
  return <C className={className} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />
}
