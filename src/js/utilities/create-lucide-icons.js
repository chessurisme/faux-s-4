'use strict'

import {
  createIcons,
  UserRound,
  UsersRound,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Minus,
  Plus,
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileInput,
  ImageDown,
  Share,
  ArrowLeft,
  Loader,
  RotateCcw,
  Laugh,
  Hourglass,
  MessageSquareText,
  SunMoon,
  X,
  XSquare,
  Shield,
  Heart,
  Check,
  MessageCircleMore,
  CheckCircle2,
  AlertTriangle
} from 'lucide'

/**
 * Creates Lucide icons by calling createIcons()
 * with the icons to generate.
 */
async function createLucideIcons() {
  createIcons({
    icons: {
      UserRound,
      UsersRound,
      Clock1,
      Clock2,
      Clock3,
      Clock4,
      Clock5,
      Clock6,
      Clock7,
      Clock8,
      Clock9,
      Clock10,
      Clock11,
      Clock12,
      Minus,
      Plus,
      Calendar,
      ChevronLeft,
      ChevronRight,
      FileInput,
      ImageDown,
      Share,
      ArrowLeft,
      Loader,
      RotateCcw,
      Laugh,
      Hourglass,
      MessageSquareText,
      SunMoon,
      X,
      XSquare,
      Shield,
      Heart,
      Check,
      MessageCircleMore,
      CheckCircle2,
      AlertTriangle
    }
  })
}

export { createLucideIcons }
