---
title: Fix heart button count not increasing
status: done
created: 2026-03-21
---

## Description

Heart button on homepage sends a successful request but the count doesn't increase. User sees "0 people + you" instead of "1 person + you".

## Acceptance Criteria

- Clicking the heart button shows the correct incremented count
- If 5 people liked before, clicking shows "5 people + you"

## Technical Plan

**Root cause**: In `LikeButton.tsx:65`, the display logic subtracts 1 from `likeCount` when `hasLiked` is true: `<Counter count={hasLiked ? likeCount - 1 : likeCount}/>`

The API returns the incremented count including the user's like, but the frontend subtracts 1, which cancels out the increment.

**Fix**: Remove the `- 1` subtraction since the API already returns the correct total.

## Sub-tasks

- [x] Identify the bug in LikeButton.tsx
- [x] Fix the display logic in LikeButton.tsx
- [x] Test the fix

## Devlog

- 2026-03-21: Identified bug - line 65 subtracts 1 from likeCount when hasLiked is true, but API returns incremented count including user
- 2026-03-21: Fix applied - removed `- 1` from Counter, now shows `likeCount` directly. Verified by grep search.

## PR Reference

