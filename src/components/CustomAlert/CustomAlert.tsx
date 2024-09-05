import { Alert } from "@mantine/core";
import { IconInfoCircle, IconAlertTriangle, IconCircleDashedCheck,  } from "@tabler/icons-react";

// Define a type for the props
interface AlertProps {
  visible: boolean;
  type:  string;
  title: string;
  description: string;
}

export default function CustomAlert({ visible, type, title, description }: AlertProps) {
  const icon = 
    type === "success" ? <IconCircleDashedCheck /> :
    type === "error" ? <IconAlertTriangle /> :
    type === "warning" ? <IconAlertTriangle /> :
    type === "info" ? <IconInfoCircle /> : null;

  // Fixing the color based on the type prop
  const color =
    type === "success" ? "green" :
    type === "error" ? "red" :
    type === "warning" ? "yellow" :
    type === "info" ? "blue" : "gray";

  return (
    <Alert
      hidden={!visible}
      variant="filled"
      color={color}
      radius="md"
      title={title}
      icon={icon}
    >
      {description}
    </Alert>
  );
}
