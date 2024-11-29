import { View, Text } from 'react-native';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import { styles } from './styles';
import { useAtom } from 'jotai';
import { isEditAtom } from '@src/app/providers/atoms/editAtom';

const Header = () => {
  const [isEdit, setEdit] = useAtom(isEditAtom);

  const handleEditButtonClick = () => {
    setEdit(true);
  };

  return (
    <View style={styles.header}>
      {isEdit ? (
        <Text style={[styles.title, styles.centerTitle]}>Edit menu</Text>
      ) : (
        <>
          <Text style={styles.title}>Menu</Text>
          <CustomButton
            onPress={handleEditButtonClick}
            title="Edit"
            width={55}
            height={43}
            type={ButtonType.LINK}
          />
        </>
      )}
    </View>
  );
};

export default Header;
