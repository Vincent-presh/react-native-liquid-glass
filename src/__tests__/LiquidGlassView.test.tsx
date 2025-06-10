import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { LiquidGlassView, LiquidGlassPresets } from '../LiquidGlassView';

describe('LiquidGlassView', () => {
  it('renders correctly with default props', () => {
    const { getByLabelText } = render(
      <LiquidGlassView>
        <Text>Test content</Text>
      </LiquidGlassView>
    );

    expect(getByLabelText('Liquid glass background')).toBeTruthy();
  });

  it('renders with custom props', () => {
    const { getByLabelText } = render(
      <LiquidGlassView
        blurIntensity={50}
        blurStyle="dark"
        overlayColor="rgba(0, 0, 0, 0.2)"
        accessibilityLabel="Custom glass"
      >
        <Text>Custom content</Text>
      </LiquidGlassView>
    );

    expect(getByLabelText('Custom glass')).toBeTruthy();
  });

  it('renders with presets', () => {
    const { getByLabelText } = render(
      <LiquidGlassView {...LiquidGlassPresets.prominent}>
        <Text>Preset content</Text>
      </LiquidGlassView>
    );

    expect(getByLabelText('Liquid glass background')).toBeTruthy();
  });

  it('exports presets correctly', () => {
    expect(LiquidGlassPresets.subtle).toBeDefined();
    expect(LiquidGlassPresets.standard).toBeDefined();
    expect(LiquidGlassPresets.prominent).toBeDefined();
    expect(LiquidGlassPresets.dark).toBeDefined();

    expect(LiquidGlassPresets.subtle.blurIntensity).toBe(15);
    expect(LiquidGlassPresets.prominent.blurIntensity).toBe(30);
  });
});
