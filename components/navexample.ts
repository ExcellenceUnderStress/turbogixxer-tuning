import {useVariants} from 'react-exo/utils';
import {StyleSheet} from 'react-native-unistyles';
import {View} from 'react-native';

import {ButtonsButton} from '';
import {ChevronDown} from '';
import {Placeholder} from '';

import type {ViewStyle, StyleProp} from 'react-native';

export interface DropdownHeaderNavigationTriggerProps {
  open: typeof DropdownHeaderNavigationTriggerVariants.open[number],
  type: typeof DropdownHeaderNavigationTriggerVariants.type[number],
  /** Used to override the default root style. */
  style?: StyleProp<ViewStyle>,
  /** Used to locate this view in end-to-end tests. */
  testID?: string,
}

export const DropdownHeaderNavigationTriggerVariants = {
  open: ['False', 'True'],
  type: ['Simple', 'FeaturedCard', 'SimpleWithFooter', '$2ColWithLinksAndFooter', 'Simple2Col', 'FeaturedPosts', 'Simple2ColWithFooter'],
} as const;

export function DropdownHeaderNavigationTrigger(props: DropdownHeaderNavigationTriggerProps) {
  const {open, type} = props;
  const {vstyles} = useVariants(DropdownHeaderNavigationTriggerVariants, {open, type}, styles);

  return (
    <View testID={props.testID ?? "4:2755"} style={[vstyles.root(), props.style]}>
      <ButtonsButton testID="4:2888"
        style={vstyles.buttonsButton()}
        hierarchy="Link_gray"
        icon="Default"
        size="lg"
        state="Default"
        __IconTrailing
        __IconLeading={false}
        __IconLeadingSwap={
          <Placeholder testID="1:42596"/>
        }
        __IconTrailingSwap={
          <ChevronDown testID="1:39275"/>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create(theme => ({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonsButton: {
    gap: 'spacing.xs',
  },
  buttonsButtonOpenTrueTypeSimple2ColWithFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenFalseTypeSimple2ColWithFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenTrueTypeFeaturedPosts: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenTrueTypeSimple2Col: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenFalseTypeFeaturedPosts: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenFalseTypeSimple2Col: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenTrueType2ColWithLinksAndFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenTrueTypeSimpleWithFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenFalseType2ColWithLinksAndFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenFalseTypeSimpleWithFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenTrueTypeFeaturedCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenTrueTypeSimple: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsButtonOpenFalseTypeFeaturedCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
