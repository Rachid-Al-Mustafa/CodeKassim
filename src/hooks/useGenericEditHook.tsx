// src/hooks/useGenericEditHook.ts
import { notification } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useGenericEditHook(
  func: (data: any) => Promise<any>,
  entity: string | string[]
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: func,
    onSuccess: (res: any) => {
      // ✅ Invalidate queries for all specified entities
      const invalidate = (e: string) => queryClient.invalidateQueries({ queryKey: [e] });

      Array.isArray(entity) ? entity.forEach(invalidate) : invalidate(entity);

      // ✅ Show success or error notification based on response code
      const message = res?.message ?? res?.data?.message ?? "No message";
      const isSuccess = [200, 201].includes(res?.code) || [200, 201].includes(res?.data?.code);

      notification[isSuccess ? "success" : "error"]({
        message: `${isSuccess ? "Success" : "Failure"}: ${message}`,
        duration: 2,
      });
    },
    onError: (err: any) => {
      // 🚨 Show error notification
      notification.error({
        message: `Error: ${err?.message ?? "Unknown error"}`,
        duration: 2,
      });
    },
  });

  return mutation;
}
