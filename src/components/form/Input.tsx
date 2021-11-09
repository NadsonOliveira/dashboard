import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}
export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
        name={name}
        id={name}
        type="email"
        focusBorderColor="green.100"
        bgColor="gray.900"
        variant="outline"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
