/**
 * The dashboard card props interface.
 */
import {ReactNode} from "react";

export interface IDashboardCardProps {
  title?: string;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  selected?: boolean;
}