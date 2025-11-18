// Валидация комментариев
function validateComment (string) {
  return string.length <= 140;
}

// Валидация хэштэгов
function validateHashtags(string) {
  const tags = string.trim().split(/\s+/).filter(Boolean);

  if (tags.length > 5) {
    return false;
  }

  const lowerSet = new Set();

  for (const tag of tags) {
    if (!tag.startsWith('#')) {
      return false;
    }

    const tagBody = tag.slice(1);

    if (tagBody.length === 0) {
      return false;
    }

    if (!/^[\p{L}\p{N}]+$/u.test(tagBody)) {
      return false;
    }

    if (tag.length > 20) {
      return false;
    }

    const lowerTag = tag.toLowerCase();
    if (lowerSet.has(lowerTag)) {
      return false;
    }
    lowerSet.add(lowerTag);
  }

  return true;
}

export {validateComment, validateHashtags};
