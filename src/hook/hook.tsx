import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Email } from '../api/api'

export const useSendEmail = (
    onSuccessCallback: () => void,
    onErrorCallback: (error: unknown) => void,
    isRequestSuccess: () => void,
) => {
  const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: Email.sendEmail,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['sendEmail'] });
            onSuccessCallback();
            isRequestSuccess()
        },
        onError: (error) => {
            onErrorCallback(error);
        },
    });

}
