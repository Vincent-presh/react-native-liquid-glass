import type { ViewStyle } from 'react-native';

export interface LiquidGlassViewProps {
  /** Content to be rendered inside the glass view */
  children?: React.ReactNode;

  /** Intensity of the blur effect (0-100). Default: 20 */
  blurIntensity?: number;

  /** Style of the blur effect */
  blurStyle?: 'light' | 'dark' | 'xlight' | 'prominent';

  /** Overlay color in RGBA format. Default: 'rgba(255, 255, 255, 0.1)' */
  overlayColor?: string;

  /** Additional styles to apply to the container */
  style?: ViewStyle;

  /** Whether the component should have rounded corners. Default: true */
  rounded?: boolean;

  /** Border radius value. Default: 16 */
  borderRadius?: number;

  /** Accessibility label for screen readers */
  accessibilityLabel?: string;

  /** Whether the glass effect should be animated. Default: false */
  animated?: boolean;

  /** Intensity of the refractive effect (0-1). Default: 0.1 */
  refractiveIntensity?: number;
}

export interface LiquidGlassPreset {
  blurIntensity: number;
  blurStyle: 'light' | 'dark' | 'xlight' | 'prominent';
  overlayColor: string;
  refractiveIntensity: number;
}
