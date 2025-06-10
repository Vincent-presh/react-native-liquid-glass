# react-native-liquid-glass 🧊

A sleek, modern React Native component that brings Apple's revolutionary **iOS 26 Liquid Glass** design language to your mobile apps. Create stunning frosted-glass (glassmorphism) overlays with translucent materials that reflect and refract their surroundings, delivering a new level of vitality and focus to your content.

## ✨ iOS 26 Design Language

Inspired by [Apple's iOS 26 announcement](https://www.apple.com/newsroom/2025/06/apple-elevates-the-iphone-experience-with-ios-26/), Liquid Glass is a new translucent material that:

- **Reflects and refracts** its surroundings for dynamic visual depth
- **Brings greater focus** to content with enhanced vitality  
- **Provides stunning customization** options with clear, glass-like effects
- **Adapts fluidly** to available space and content
- **Maintains instant familiarity** while being more expressive and delightful

## 🚀 Installation

```sh
npm install react-native-liquid-glass
```

or

```sh
yarn add react-native-liquid-glass
```

## 📱 Usage

### Basic Implementation

```tsx
import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { LiquidGlassView } from 'react-native-liquid-glass';

export default function App() {
  return (
    <ImageBackground source={{ uri: 'your-background-image.jpg' }} style={{ flex: 1 }}>
      <LiquidGlassView
        blurIntensity={30}
        blurStyle="light"
        overlayColor="rgba(255, 255, 255, 0.15)"
        style={{ 
          margin: 20, 
          padding: 20,
          minHeight: 200 
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>
          iOS 26 Liquid Glass Effect
        </Text>
        <Text style={{ fontSize: 16, color: '#666', marginTop: 10 }}>
          Beautiful translucent material that reflects and refracts
        </Text>
      </LiquidGlassView>
    </ImageBackground>
  );
}
```

### Using Predefined Presets

```tsx
import { LiquidGlassView, LiquidGlassPresets } from 'react-native-liquid-glass';

// Subtle glass effect
<LiquidGlassView {...LiquidGlassPresets.subtle}>
  <Text>Subtle glass content</Text>
</LiquidGlassView>

// Prominent glass effect
<LiquidGlassView {...LiquidGlassPresets.prominent}>
  <Text>Prominent glass content</Text>
</LiquidGlassView>

// Dark glass for light backgrounds
<LiquidGlassView {...LiquidGlassPresets.dark}>
  <Text>Dark glass content</Text>
</LiquidGlassView>
```

## 🛠 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content to render inside the glass view |
| `blurIntensity` | `number` | `20` | Blur intensity (0-100) |
| `blurStyle` | `'light' \| 'dark' \| 'xlight' \| 'prominent'` | `'light'` | Style of the blur effect |
| `overlayColor` | `string` | `'rgba(255, 255, 255, 0.1)'` | Overlay color in RGBA format |
| `style` | `ViewStyle` | - | Additional styles for the container |
| `rounded` | `boolean` | `true` | Whether to apply rounded corners |
| `borderRadius` | `number` | `16` | Border radius value |
| `accessibilityLabel` | `string` | `'Liquid glass background'` | Accessibility label |
| `animated` | `boolean` | `false` | Whether to apply animation effects |
| `refractiveIntensity` | `number` | `0.1` | Intensity of refractive effect (0-1) |

## 🎨 Predefined Presets

The library includes several predefined presets that follow iOS 26 design guidelines:

- **`LiquidGlassPresets.subtle`** - Light, barely-there effect
- **`LiquidGlassPresets.standard`** - Balanced glass effect  
- **`LiquidGlassPresets.prominent`** - Strong, prominent effect
- **`LiquidGlassPresets.dark`** - Dark glass for light backgrounds

## 🔧 Platform Support

- **iOS**: Full native blur support with backdrop filters
- **Android**: Graceful fallback with enhanced shadows and overlays
- **Web**: CSS backdrop-filter support where available

## ♿ Accessibility

The component includes built-in accessibility features:
- Screen reader support with customizable labels
- Proper accessibility roles and importance
- No interference with child component accessibility

## 🎯 Examples

### Card Interface
```tsx
<LiquidGlassView
  blurIntensity={25}
  blurStyle="prominent"
  style={{ margin: 16, padding: 20 }}
>
  <Text style={{ fontSize: 18, fontWeight: '600' }}>Card Title</Text>
  <Text style={{ marginTop: 8, opacity: 0.8 }}>Card content with glass background</Text>
</LiquidGlassView>
```

### Navigation Bar
```tsx
<LiquidGlassView
  blurIntensity={40}
  blurStyle="xlight"
  rounded={false}
  style={{ 
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    paddingTop: 50,
    paddingHorizontal: 16
  }}
>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Navigation</Text>
</LiquidGlassView>
```

## 🎨 Design Philosophy

This component embraces Apple's iOS 26 design principles:

1. **Liquid Glass Material** - Translucent surfaces that interact with light
2. **Spatial Depth** - Layered interfaces with proper visual hierarchy  
3. **Expressive Design** - More personality while maintaining familiarity
4. **Vitality** - Dynamic, living interfaces that respond to content

## 🤝 Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## 📄 License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

*Inspired by Apple's iOS 26 Liquid Glass design language*
