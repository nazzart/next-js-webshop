import Info from "../icons/infoIcon";
import { clsx } from "clsx";

export default function Alert({message, type = "success"}){

    const styles = {
        base: "flex items-center rounded py-3 px-4 mb-6",
        state: {
          error: "bg-red-200 text-red-900 ",
          success: "bg-green-200 text-green-900 ",
        },
      };

    return (
        <div className={clsx([
            styles.base,
            type === "error" && styles.state.error,
            type === "success" && styles.state.success,
          ])}>
            <div className="pr-2">
                <Info size={22} className={"fill-current"} />
            </div>
            <div>{message}</div>
        </div>
    )
}