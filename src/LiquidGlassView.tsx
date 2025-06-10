import React, { useMemo } from 'react';
import { View, StyleSheet, Platform, type ViewStyle } from 'react-native';

/**
 * Props interface for LiquidGlassView component
 */
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

/**
 * LiquidGlassView - A React Native component that creates iOS 26 Liquid Glass effects
 *
 * This component implements Apple's new Liquid Glass design language from iOS 26,
 * featuring translucent materials that reflect and refract their surroundings,
 * bringing greater focus to content with a new level of vitality.
 *
 * @example
 * ```tsx
 * <LiquidGlassView
 *   blurIntensity={30}
 *   blurStyle="light"
 *   overlayColor="rgba(255, 255, 255, 0.15)"
 * >
 *   <Text>Content over glass background</Text>
 * </LiquidGlassView>
 * ```
 */
export const LiquidGlassView: React.FC<LiquidGlassViewProps> = ({
  children,
  blurIntensity = 20,
  blurStyle = 'light',
  overlayColor = 'rgba(255, 255, 255, 0.1)',
  style,
  rounded = true,
  borderRadius = 16,
  accessibilityLabel = 'Liquid glass background',
  animated = false,
  refractiveIntensity = 0.1,
}) => {
  // Memoized styles for performance
  const containerStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      position: 'relative',
      overflow: 'hidden',
      ...(rounded && { borderRadius }),
    };

    // iOS-specific blur implementation
    if (Platform.OS === 'ios') {
      return [
        baseStyle,
        {
          backgroundColor: 'transparent',
        },
        style,
      ];
    }

    // Android fallback with enhanced visual effects
    return [
      baseStyle,
      {
        backgroundColor: overlayColor,
        // Enhanced shadow for depth on Android
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      style,
    ];
  }, [style, rounded, borderRadius, overlayColor]);

  // iOS blur background style
  const blurBackgroundStyle = useMemo(() => {
    if (Platform.OS !== 'ios') return {};

    const blurTypeMap: Record<string, string> = {
      light: 'rgba(255, 255, 255, 0.7)',
      dark: 'rgba(0, 0, 0, 0.7)',
      xlight: 'rgba(255, 255, 255, 0.9)',
      prominent: 'rgba(255, 255, 255, 0.5)',
    };

    return {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: blurTypeMap[blurStyle],
      backdropFilter: `blur(${blurIntensity}px)`,
      WebkitBackdropFilter: `blur(${blurIntensity}px)`,
    };
  }, [blurIntensity, blurStyle]);

  // Refractive overlay style for the liquid glass effect
  const refractiveOverlayStyle = useMemo(
    () => ({
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'transparent',
      background:
        Platform.OS === 'ios'
          ? `linear-gradient(135deg, 
          rgba(255, 255, 255, ${refractiveIntensity * 0.3}) 0%, 
          transparent 50%, 
          rgba(255, 255, 255, ${refractiveIntensity * 0.1}) 100%)`
          : overlayColor,
      opacity: animated ? 1 : 0.8,
    }),
    [refractiveIntensity, overlayColor, animated]
  );

  // Content container style
  const contentStyle = useMemo(
    () => ({
      position: 'relative' as const,
      zIndex: 1,
      flex: 1,
    }),
    []
  );

  return (
    <View
      style={containerStyle}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="none"
      importantForAccessibility="no-hide-descendants"
    >
      {/* iOS Blur Background */}
      {Platform.OS === 'ios' && (
        <View style={blurBackgroundStyle} pointerEvents="none" />
      )}

      {/* Refractive Overlay for Liquid Glass Effect */}
      <View style={refractiveOverlayStyle} pointerEvents="none" />

      {/* Content Container */}
      <View style={contentStyle}>{children}</View>
    </View>
  );
};

/**
 * Default props for LiquidGlassView
 */
export const defaultProps = {
  blurIntensity: 20,
  blurStyle: 'light',
  overlayColor: 'rgba(255, 255, 255, 0.1)',
  rounded: true,
  borderRadius: 16,
  accessibilityLabel: 'Liquid glass background',
  animated: false,
  refractiveIntensity: 0.1,
};

/**
 * Predefined glass styles based on iOS 26 design language
 */
export const LiquidGlassPresets = {
  /** Light glass with subtle blur */
  subtle: {
    blurIntensity: 15,
    blurStyle: 'xlight' as const,
    overlayColor: 'rgba(255, 255, 255, 0.08)',
    refractiveIntensity: 0.05,
  },

  /** Standard glass effect */
  standard: {
    blurIntensity: 20,
    blurStyle: 'light' as const,
    overlayColor: 'rgba(255, 255, 255, 0.1)',
    refractiveIntensity: 0.1,
  },

  /** Prominent glass with stronger effect */
  prominent: {
    blurIntensity: 30,
    blurStyle: 'prominent' as const,
    overlayColor: 'rgba(255, 255, 255, 0.15)',
    refractiveIntensity: 0.15,
  },

  /** Dark glass for light backgrounds */
  dark: {
    blurIntensity: 25,
    blurStyle: 'dark' as const,
    overlayColor: 'rgba(0, 0, 0, 0.1)',
    refractiveIntensity: 0.08,
  },
} as const;

export default LiquidGlassView;
