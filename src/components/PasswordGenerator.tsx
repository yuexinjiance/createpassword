'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState([12])
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSpecial, setIncludeSpecial] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)

  const generatePassword = useCallback(() => {
    const numbers = '0123456789'
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let chars = lowercase
    if (includeNumbers) chars += numbers
    if (includeSpecial) chars += special
    if (includeUppercase) chars += uppercase

    let result = ''
    for (let i = 0; i < length[0]; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
  }, [length, includeNumbers, includeSpecial, includeUppercase])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password)
    } catch (err) {
      console.error('Failed to copy password:', err)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">密码生成器</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>密码长度: {length}</Label>
          </div>
          <Slider
            value={length}
            onValueChange={setLength}
            min={6}
            max={32}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="numbers">包含数字</Label>
            <Switch
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="special">包含特殊字符</Label>
            <Switch
              id="special"
              checked={includeSpecial}
              onCheckedChange={setIncludeSpecial}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="uppercase">包含大写字母</Label>
            <Switch
              id="uppercase"
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex space-x-2">
            <Input
              value={password}
              readOnly
              className="font-mono"
              placeholder="生成的密码将显示在这里"
            />
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="shrink-0"
            >
              复制
            </Button>
          </div>
          <Button
            onClick={generatePassword}
            className="w-full"
          >
            生成密码
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}