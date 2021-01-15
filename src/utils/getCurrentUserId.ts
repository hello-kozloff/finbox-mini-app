/**
 * The function return current user id.
 */
export default function getCurrentUserId(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get('vk_user_id');
}