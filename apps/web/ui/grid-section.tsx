import { cx } from "@tencorvids/util";

interface GridSectionProps {
    children?: React.ReactNode;
    className?: string;
    outerClassName?: string;
}

export function GridSection({ children, className, outerClassName }: GridSectionProps) {
    return (
        <div className={cx("w-full min-h-8 flex border border-t-0", outerClassName)}>
            <div className="w-2 md:w-4 lg:w-8 border-r"></div>

            <div className={cx("w-full max-w-[600px]", className)}>
                {children}
            </div>

            <div className="w-2 md:w-4 lg:w-8 border-l"></div>
        </div>
    );
}
