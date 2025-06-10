import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  StatusBar,
} from 'react-native';
import { LiquidGlassView, LiquidGlassPresets } from 'react-native-liquid-view';

// Sample background image - you can replace with any beautiful background
const backgroundImage = {
  uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Hero Section */}
          <LiquidGlassView
            blurIntensity={30}
            blurStyle="light"
            overlayColor="rgba(255, 255, 255, 0.15)"
            style={styles.heroCard}
          >
            <Text style={styles.heroTitle}>iOS 26 Liquid Glass</Text>
            <Text style={styles.heroSubtitle}>
              Experience the future of design with translucent materials that
              reflect and refract their surroundings
            </Text>
          </LiquidGlassView>

          {/* Preset Examples */}
          <Text style={styles.sectionTitle}>Glass Presets</Text>

          {/* Subtle Glass */}
          <LiquidGlassView
            {...LiquidGlassPresets.subtle}
            style={styles.presetCard}
          >
            <Text style={styles.presetTitle}>Subtle</Text>
            <Text style={styles.presetDescription}>
              Light, barely-there effect perfect for background elements
            </Text>
          </LiquidGlassView>

          {/* Standard Glass */}
          <LiquidGlassView
            {...LiquidGlassPresets.standard}
            style={styles.presetCard}
          >
            <Text style={styles.presetTitle}>Standard</Text>
            <Text style={styles.presetDescription}>
              Balanced glass effect ideal for most UI components
            </Text>
          </LiquidGlassView>

          {/* Prominent Glass */}
          <LiquidGlassView
            {...LiquidGlassPresets.prominent}
            style={styles.presetCard}
          >
            <Text style={styles.presetTitle}>Prominent</Text>
            <Text style={styles.presetDescription}>
              Strong, prominent effect for focal elements
            </Text>
          </LiquidGlassView>

          {/* Dark Glass */}
          <LiquidGlassView
            {...LiquidGlassPresets.dark}
            style={styles.presetCard}
          >
            <Text style={[styles.presetTitle, styles.lightText]}>Dark</Text>
            <Text style={[styles.presetDescription, styles.lightText]}>
              Dark glass perfect for light backgrounds and contrast
            </Text>
          </LiquidGlassView>

          {/* Custom Configuration */}
          <Text style={styles.sectionTitle}>Custom Configuration</Text>

          <LiquidGlassView
            blurIntensity={45}
            blurStyle="prominent"
            overlayColor="rgba(138, 43, 226, 0.2)"
            refractiveIntensity={0.2}
            borderRadius={24}
            style={styles.customCard}
          >
            <Text style={styles.customTitle}>Custom Liquid Glass</Text>
            <Text style={styles.customDescription}>
              🔮 Fully customizable with your own blur intensity, colors, and
              refractive effects
            </Text>
            <View style={styles.featureList}>
              <Text style={styles.feature}>✨ Translucent materials</Text>
              <Text style={styles.feature}>🌟 Refractive effects</Text>
              <Text style={styles.feature}>🎨 Custom styling</Text>
              <Text style={styles.feature}>📱 Cross-platform</Text>
            </View>
          </LiquidGlassView>

          {/* Bottom Spacing */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  heroCard: {
    padding: 30,
    marginBottom: 30,
    minHeight: 150,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#4a4a4a',
    textAlign: 'center',
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
    marginTop: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  presetCard: {
    padding: 20,
    marginBottom: 16,
    minHeight: 100,
  },
  presetTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2a2a2a',
    marginBottom: 8,
  },
  presetDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  lightText: {
    color: '#f0f0f0',
  },
  customCard: {
    padding: 24,
    marginBottom: 20,
    minHeight: 180,
  },
  customTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2a1a4a',
    marginBottom: 12,
  },
  customDescription: {
    fontSize: 16,
    color: '#4a4a4a',
    lineHeight: 22,
    marginBottom: 16,
  },
  featureList: {
    gap: 8,
  },
  feature: {
    fontSize: 14,
    color: '#5a5a5a',
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 40,
  },
});
